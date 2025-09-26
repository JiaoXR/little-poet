// 背诗词小游戏主应用逻辑
class LittlePoetGame {
    constructor() {
        this.currentPoemIndex = 0;
        this.currentPoem = null;
        this.showPinyin = false;
        this.practiceMode = null; // 'fillBlank' 或 'recite'
        this.practiceActive = false;
        this.blankPositions = [];
        this.currentLineIndex = 0;
        this.stars = 0;
        this.completedPoems = new Set();
        this.isReading = false;
        
        this.initializeElements();
        this.loadProgress();
        this.bindEvents();
        this.displayPoem();
        this.updateProgress();
        this.updateNavigationButtons();
    }

    initializeElements() {
        this.elements = {
            poemTitle: document.getElementById('poemTitle'),
            poemAuthor: document.getElementById('poemAuthor'),
            poemDisplay: document.getElementById('poemDisplay'),
            practiceArea: document.getElementById('practiceArea'),
            feedbackArea: document.getElementById('feedbackArea'),
            starCount: document.getElementById('starCount'),
            currentPoemIndex: document.getElementById('currentPoemIndex'),
            totalPoems: document.getElementById('totalPoems'),
            togglePinyin: document.getElementById('togglePinyin'),
            readPoem: document.getElementById('readPoem'),
            startPractice: document.getElementById('startPractice'),
            prevPoem: document.getElementById('prevPoem'),
            nextPoem: document.getElementById('nextPoem'),
            resetPractice: document.getElementById('resetPractice'),
            modeModal: document.getElementById('modeModal'),
            fillBlankMode: document.getElementById('fillBlankMode'),
            reciteMode: document.getElementById('reciteMode'),
            closeModal: document.getElementById('closeModal'),
            rewardAnimation: document.getElementById('rewardAnimation')
        };
        
        this.elements.totalPoems.textContent = poemsData.length;
    }

    bindEvents() {
        this.elements.togglePinyin.addEventListener('click', () => this.togglePinyin());
        this.elements.readPoem.addEventListener('click', () => this.readPoem());
        this.elements.startPractice.addEventListener('click', () => this.showModeSelection());
        this.elements.prevPoem.addEventListener('click', () => this.prevPoem());
        this.elements.nextPoem.addEventListener('click', () => this.nextPoem());
        this.elements.resetPractice.addEventListener('click', () => this.resetPractice());
        this.elements.fillBlankMode.addEventListener('click', () => this.startPractice('fillBlank'));
        this.elements.reciteMode.addEventListener('click', () => this.startPractice('recite'));
        this.elements.closeModal.addEventListener('click', () => this.hideModeSelection());
    }

    displayPoem() {
        this.currentPoem = poemsData[this.currentPoemIndex];
        
        this.elements.poemTitle.textContent = this.currentPoem.title;
        this.elements.poemAuthor.textContent = this.currentPoem.author;
        this.elements.currentPoemIndex.textContent = this.currentPoemIndex + 1;
        
        this.renderPoemContent();
    }

    renderPoemContent() {
        this.elements.poemDisplay.innerHTML = '';
        
        this.currentPoem.content.forEach((lineData, lineIndex) => {
            const lineDiv = document.createElement('div');
            lineDiv.className = 'poem-line';
            
            lineData.characters.forEach((charData, charIndex) => {
                const charBlock = document.createElement('div');
                charBlock.className = 'character-block';
                charBlock.dataset.lineIndex = lineIndex;
                charBlock.dataset.charIndex = charIndex;
                
                const pinyinSpan = document.createElement('div');
                pinyinSpan.className = `pinyin ${this.showPinyin ? 'show' : ''}`;
                pinyinSpan.textContent = charData.pinyin;
                
                const charSpan = document.createElement('div');
                charSpan.className = 'character';
                charSpan.textContent = charData.char;
                charSpan.dataset.lineIndex = lineIndex;
                charSpan.dataset.charIndex = charIndex;
                
                charBlock.appendChild(pinyinSpan);
                charBlock.appendChild(charSpan);
                lineDiv.appendChild(charBlock);
                
                // 添加点击朗读单字功能
                charBlock.addEventListener('click', () => {
                    this.speakText(charData.char, 0.4, 1.2);
                });
            });
            
            this.elements.poemDisplay.appendChild(lineDiv);
        });
    }

    togglePinyin() {
        this.showPinyin = !this.showPinyin;
        const pinyinElements = document.querySelectorAll('.pinyin');
        pinyinElements.forEach(element => {
            element.classList.toggle('show', this.showPinyin);
        });
        
        this.elements.togglePinyin.style.background = this.showPinyin 
            ? 'linear-gradient(135deg, #4CAF50, #45A049)' 
            : 'linear-gradient(135deg, #FF9800, #F57C00)';
    }

    readPoem() {
        if (this.isReading) {
            // 如果正在朗读，则停止
            this.stopReading();
        } else {
            // 开始朗读
            this.readPoemWithTitle();
        }
    }

    stopReading() {
        window.speechSynthesis.cancel();
        this.isReading = false;
        
        const readBtn = this.elements.readPoem;
        readBtn.querySelector('.btn-text').textContent = '朗读';
        readBtn.querySelector('.btn-icon').textContent = '🔊';
        readBtn.style.background = 'linear-gradient(135deg, #FF9800, #F57C00)';
    }

    async readPoemWithTitle() {
        if (!('speechSynthesis' in window)) {
            this.showFeedback('您的浏览器不支持语音朗读功能', 'error');
            return;
        }

        // 停止当前朗读
        window.speechSynthesis.cancel();
        this.isReading = true;

        // 更新按钮状态显示正在朗读
        const readBtn = this.elements.readPoem;
        
        readBtn.querySelector('.btn-text').textContent = '停止';
        readBtn.querySelector('.btn-icon').textContent = '⏹️';
        readBtn.style.background = 'linear-gradient(135deg, #FF6B6B, #FF5252)';

        try {
            // 构建完整的朗读内容
            const title = this.currentPoem.title;
            const author = this.currentPoem.author;
            const content = this.currentPoem.content.map(line => line.line);

            // 朗读题目和作者，语调稍高一些，更有仪式感
            if (this.isReading) {
                await this.speakTextAsync(`《${title}》，作者：${author}`, 0.45, 1.3);
            }
            
            // 短暂停顿
            if (this.isReading) {
                await this.sleep(1000);
            }
            
            // 逐行朗读诗词内容，纯朗读体验
            for (let lineIndex = 0; lineIndex < content.length && this.isReading; lineIndex++) {
                const lineText = content[lineIndex];
                
                // 根据诗句内容调整语调和情感
                const emotion = this.getEmotionForLine(lineText, lineIndex);
                
                if (this.isReading) {
                    await this.speakTextAsync(lineText, emotion.rate, emotion.pitch);
                }
                
                // 行间停顿，给听众时间品味
                if (this.isReading && lineIndex < content.length - 1) {
                    await this.sleep(1200); // 更长的停顿时间
                }
            }
            
            // 朗读完成后的停顿
            if (this.isReading) {
                await this.sleep(500);
            }
            
        } finally {
            // 恢复按钮原始状态
            this.isReading = false;
            readBtn.querySelector('.btn-text').textContent = '朗读';
            readBtn.querySelector('.btn-icon').textContent = '🔊';
            readBtn.style.background = 'linear-gradient(135deg, #FF9800, #F57C00)';
        }
    }

    // 根据诗句内容判断情感色彩，调整朗读参数
    getEmotionForLine(lineText, lineIndex) {
        const title = this.currentPoem.title;
        
        // 基础语速 - 更慢更有感情
        let rate = 0.4;
        let pitch = 1.0;
        
        // 根据诗词类型和内容调整情感
        if (title.includes('静夜思')) {
            // 静夜思：宁静、思念、略带忧伤
            rate = 0.35;
            pitch = lineText.includes('思') || lineText.includes('望') ? 0.9 : 1.0;
        } else if (title.includes('春晓')) {
            // 春晓：清新、轻快、活泼
            rate = 0.42;
            pitch = lineText.includes('鸟') || lineText.includes('花') ? 1.1 : 1.0;
        } else if (title.includes('咏鹅')) {
            // 咏鹅：活泼、生动、有趣
            rate = 0.45;
            pitch = lineText.includes('鹅鹅鹅') ? 1.2 : 1.1;
        } else if (title.includes('登鹳雀楼') || title.includes('望庐山瀑布')) {
            // 登高诗：壮阔、豪迈、高昂
            rate = 0.38;
            pitch = lineText.includes('千里') || lineText.includes('万') || lineText.includes('三千尺') ? 1.2 : 1.0;
        } else if (title.includes('悯农')) {
            // 悯农：深沉、同情、教诲
            rate = 0.35;
            pitch = lineText.includes('辛苦') || lineText.includes('汗滴') ? 0.9 : 1.0;
        } else if (title.includes('江雪')) {
            // 江雪：孤寂、清冷、深沉
            rate = 0.32;
            pitch = lineText.includes('独') || lineText.includes('孤') ? 0.85 : 0.95;
        } else if (title.includes('草')) {
            // 草：坚韧、生命力、哲理
            rate = 0.38;
            pitch = lineText.includes('又生') || lineText.includes('不尽') ? 1.1 : 1.0;
        } else if (title.includes('村居')) {
            // 村居：欢快、童趣、春意盎然
            rate = 0.42;
            pitch = lineText.includes('儿童') || lineText.includes('放纸鸢') ? 1.2 : 1.1;
        } else if (title.includes('小池')) {
            // 小池：清新、宁静、生机
            rate = 0.4;
            pitch = lineText.includes('小荷') || lineText.includes('蜻蜓') ? 1.15 : 1.0;
        } else if (title.includes('赠汪伦')) {
            // 赠汪伦：友情、温暖、感动
            rate = 0.38;
            pitch = lineText.includes('桃花潭水') || lineText.includes('送我情') ? 1.1 : 1.0;
        } else if (title.includes('黄鹤楼')) {
            // 黄鹤楼送孟浩然之广陵：离别、壮美、深情
            rate = 0.36;
            pitch = lineText.includes('烟花三月') || lineText.includes('长江') ? 1.1 : 0.95;
        } else if (title.includes('回乡偶书')) {
            // 回乡偶书：岁月、乡愁、温情
            rate = 0.35;
            pitch = lineText.includes('儿童') || lineText.includes('笑问') ? 1.1 : 0.9;
        } else if (title.includes('绝句')) {
            // 绝句（杜甫）：春意盎然、生机勃勃
            rate = 0.42;
            pitch = lineText.includes('黄鹂') || lineText.includes('白鹭') ? 1.15 : 1.05;
        } else if (title.includes('山行')) {
            // 山行：秋色美景、诗意浓郁
            rate = 0.38;
            pitch = lineText.includes('枫林晚') || lineText.includes('红于二月花') ? 1.2 : 1.0;
        } else if (title.includes('枫桥夜泊')) {
            // 枫桥夜泊：夜晚宁静、略带愁绪
            rate = 0.33;
            pitch = lineText.includes('钟声') || lineText.includes('客船') ? 0.95 : 0.9;
        } else if (title.includes('游子吟')) {
            // 游子吟：母爱深情、温暖感人
            rate = 0.35;
            pitch = lineText.includes('慈母') || lineText.includes('三春晖') ? 1.1 : 0.95;
        } else if (title.includes('清明')) {
            // 清明：春雨绵绵、清新淡雅
            rate = 0.37;
            pitch = lineText.includes('杏花村') || lineText.includes('牧童') ? 1.1 : 0.95;
        } else if (title.includes('九月九日忆山东兄弟')) {
            // 九月九日忆山东兄弟：思念深情、略带孤独
            rate = 0.34;
            pitch = lineText.includes('倍思亲') || lineText.includes('少一人') ? 0.9 : 0.95;
        } else if (title.includes('凉州词')) {
            // 凉州词：豪放雄壮、边塞风情
            rate = 0.4;
            pitch = lineText.includes('夜光杯') || lineText.includes('几人回') ? 1.15 : 1.05;
        } else if (title.includes('出塞')) {
            // 出塞：壮志豪情、历史厚重
            rate = 0.38;
            pitch = lineText.includes('飞将在') || lineText.includes('不教胡马') ? 1.2 : 1.0;
        } else if (title.includes('芙蓉楼送辛渐')) {
            // 芙蓉楼送辛渐：友谊真挚、品格高洁
            rate = 0.36;
            pitch = lineText.includes('冰心在玉壶') ? 1.15 : 0.98;
        } else if (title.includes('竹里馆')) {
            // 竹里馆：幽静闲适、禅意悠远
            rate = 0.32;
            pitch = lineText.includes('明月来相照') ? 1.1 : 0.92;
        } else if (title.includes('相思')) {
            // 相思：情意绵绵、温柔深情
            rate = 0.35;
            pitch = lineText.includes('红豆') || lineText.includes('最相思') ? 1.08 : 0.95;
        } else if (title.includes('送元二使安西')) {
            // 送元二使安西：离别之情、友谊深厚
            rate = 0.36;
            pitch = lineText.includes('劝君更尽一杯酒') || lineText.includes('无故人') ? 1.05 : 0.95;
        } else if (title.includes('鹿柴')) {
            // 鹿柴：空山幽静、禅意深远
            rate = 0.3;
            pitch = lineText.includes('人语响') || lineText.includes('青苔上') ? 1.0 : 0.88;
        } else if (title.includes('别董大')) {
            // 别董大：豁达乐观、友情鼓励
            rate = 0.4;
            pitch = lineText.includes('莫愁') || lineText.includes('不识君') ? 1.2 : 1.05;
        } else if (title.includes('逢雪宿芙蓉山主人')) {
            // 逢雪宿芙蓉山主人：寒夜温情、人情温暖
            rate = 0.34;
            pitch = lineText.includes('柴门闻犬吠') || lineText.includes('夜归人') ? 1.05 : 0.9;
        }
        
        // 最后一句通常更有总结性，语调可以稍微降低
        if (lineIndex === this.currentPoem.content.length - 1) {
            pitch *= 0.95;
            rate *= 0.95;
        }
        
        return { rate, pitch };
    }


    speakText(text, rate = 0.4, pitch = 1.1) {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'zh-CN';
            utterance.rate = rate; // 可调节的语速，更慢
            utterance.pitch = pitch; // 可调节的音调
            utterance.volume = 0.9; // 音量
            
            // 尝试选择中文语音，优先选择女声
            const voices = window.speechSynthesis.getVoices();
            const chineseVoice = voices.find(voice => 
                (voice.lang.includes('zh') || voice.lang.includes('CN')) && 
                (voice.name.includes('Female') || voice.name.includes('女'))
            ) || voices.find(voice => 
                voice.lang.includes('zh') || voice.lang.includes('CN')
            );
            
            if (chineseVoice) {
                utterance.voice = chineseVoice;
            }
            
            window.speechSynthesis.speak(utterance);
        } else {
            this.showFeedback('您的浏览器不支持语音朗读功能', 'error');
        }
    }

    // 异步朗读函数
    speakTextAsync(text, rate = 0.4, pitch = 1.1) {
        return new Promise((resolve) => {
            if (!('speechSynthesis' in window) || !this.isReading) {
                resolve();
                return;
            }

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'zh-CN';
            utterance.rate = rate;
            utterance.pitch = pitch;
            utterance.volume = 0.9;
            
            // 尝试选择中文语音，优先选择女声
            const voices = window.speechSynthesis.getVoices();
            const chineseVoice = voices.find(voice => 
                (voice.lang.includes('zh') || voice.lang.includes('CN')) && 
                (voice.name.includes('Female') || voice.name.includes('女'))
            ) || voices.find(voice => 
                voice.lang.includes('zh') || voice.lang.includes('CN')
            );
            
            if (chineseVoice) {
                utterance.voice = chineseVoice;
            }
            
            utterance.onend = () => resolve();
            utterance.onerror = () => resolve();
            
            // 检查是否仍在朗读状态
            if (this.isReading) {
                window.speechSynthesis.speak(utterance);
            } else {
                resolve();
            }
        });
    }

    // 延时函数
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    showModeSelection() {
        this.elements.modeModal.style.display = 'flex';
    }

    hideModeSelection() {
        this.elements.modeModal.style.display = 'none';
    }

    startPractice(mode) {
        this.practiceMode = mode;
        this.practiceActive = true;
        this.currentLineIndex = 0;
        
        this.hideModeSelection();
        this.elements.resetPractice.style.display = 'block';
        this.elements.startPractice.style.display = 'none';
        
        if (mode === 'fillBlank') {
            this.startFillBlankPractice();
        } else if (mode === 'recite') {
            this.startRecitePractice();
        }
        
        this.clearFeedback();
    }

    startFillBlankPractice() {
        this.generateBlankPositions();
        this.renderFillBlankDisplay();
        this.renderFillBlankInputs();
    }

    generateBlankPositions() {
        this.blankPositions = [];
        const totalChars = this.currentPoem.content.reduce((sum, line) => sum + line.characters.length, 0);
        const blanksCount = Math.min(Math.max(2, Math.floor(totalChars * 0.3)), 6);
        
        const allPositions = [];
        this.currentPoem.content.forEach((line, lineIndex) => {
            line.characters.forEach((char, charIndex) => {
                allPositions.push({lineIndex, charIndex});
            });
        });
        
        for (let i = 0; i < blanksCount; i++) {
            const randomIndex = Math.floor(Math.random() * allPositions.length);
            this.blankPositions.push(allPositions.splice(randomIndex, 1)[0]);
        }
    }

    renderFillBlankDisplay() {
        this.elements.poemDisplay.innerHTML = '';
        
        this.currentPoem.content.forEach((lineData, lineIndex) => {
            const lineDiv = document.createElement('div');
            lineDiv.className = 'poem-line';
            
            lineData.characters.forEach((charData, charIndex) => {
                const charBlock = document.createElement('div');
                charBlock.className = 'character-block';
                
                const pinyinSpan = document.createElement('div');
                pinyinSpan.className = `pinyin ${this.showPinyin ? 'show' : ''}`;
                pinyinSpan.textContent = charData.pinyin;
                
                const charSpan = document.createElement('div');
                const isBlank = this.blankPositions.some(pos => 
                    pos.lineIndex === lineIndex && pos.charIndex === charIndex
                );
                
                charSpan.className = `character ${isBlank ? 'missing' : ''}`;
                charSpan.textContent = isBlank ? '' : charData.char;
                charSpan.dataset.answer = charData.char;
                charSpan.dataset.lineIndex = lineIndex;
                charSpan.dataset.charIndex = charIndex;
                
                charBlock.appendChild(pinyinSpan);
                charBlock.appendChild(charSpan);
                lineDiv.appendChild(charBlock);
            });
            
            this.elements.poemDisplay.appendChild(lineDiv);
        });
    }

    renderFillBlankInputs() {
        const inputArea = document.createElement('div');
        inputArea.className = 'input-area';
        
        this.blankPositions.forEach((pos, index) => {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'char-input';
            input.maxLength = 1;
            input.dataset.lineIndex = pos.lineIndex;
            input.dataset.charIndex = pos.charIndex;
            input.dataset.inputIndex = index;
            
            input.addEventListener('input', (e) => {
                if (e.target.value) {
                    this.checkBlankAnswer(e.target);
                    const nextIndex = index + 1;
                    if (nextIndex < this.blankPositions.length) {
                        const nextInput = inputArea.querySelector(`[data-input-index="${nextIndex}"]`);
                        if (nextInput) nextInput.focus();
                    }
                }
            });
            
            inputArea.appendChild(input);
        });
        
        const checkButton = document.createElement('button');
        checkButton.className = 'check-answer-btn';
        checkButton.textContent = '检查答案';
        checkButton.addEventListener('click', () => this.checkAllBlanks());
        
        this.elements.practiceArea.innerHTML = '';
        this.elements.practiceArea.appendChild(inputArea);
        this.elements.practiceArea.appendChild(checkButton);
        
        // 聚焦第一个输入框
        const firstInput = inputArea.querySelector('.char-input');
        if (firstInput) firstInput.focus();
    }

    checkBlankAnswer(input) {
        const lineIndex = parseInt(input.dataset.lineIndex);
        const charIndex = parseInt(input.dataset.charIndex);
        const correctAnswer = this.currentPoem.content[lineIndex].characters[charIndex].char;
        const userAnswer = input.value;
        
        const displayChar = document.querySelector(
            `.character[data-line-index="${lineIndex}"][data-char-index="${charIndex}"]`
        );
        
        if (userAnswer === correctAnswer) {
            displayChar.textContent = userAnswer;
            displayChar.classList.remove('missing', 'incorrect');
            displayChar.classList.add('correct');
            input.style.borderColor = '#4CAF50';
        } else if (userAnswer) {
            displayChar.classList.remove('missing', 'correct');
            displayChar.classList.add('incorrect');
            input.style.borderColor = '#FF6B6B';
        }
    }

    checkAllBlanks() {
        const inputs = document.querySelectorAll('.char-input');
        let correctCount = 0;
        
        inputs.forEach(input => {
            const lineIndex = parseInt(input.dataset.lineIndex);
            const charIndex = parseInt(input.dataset.charIndex);
            const correctAnswer = this.currentPoem.content[lineIndex].characters[charIndex].char;
            const userAnswer = input.value;
            
            if (userAnswer === correctAnswer) {
                correctCount++;
            }
        });
        
        const totalBlanks = this.blankPositions.length;
        
        if (correctCount === totalBlanks) {
            this.completePractice();
        } else {
            const encouragement = encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)];
            this.showFeedback(`填对了 ${correctCount} 个，${encouragement}`, 'encourage');
        }
    }

    startRecitePractice() {
        this.renderReciteInterface();
    }

    renderReciteInterface() {
        const practiceArea = this.elements.practiceArea;
        practiceArea.innerHTML = `
            <div style="text-align: center; margin-bottom: 20px;">
                <p style="font-size: 18px; color: #666; margin-bottom: 10px;">
                    请按顺序输入第 ${this.currentLineIndex + 1} 句：
                </p>
                <p style="font-size: 16px; color: #999;">
                    "${this.currentPoem.content[this.currentLineIndex].line}"
                </p>
            </div>
            <input type="text" class="line-input" placeholder="请输入这句诗..." />
            <button class="check-answer-btn">检查</button>
        `;
        
        const input = practiceArea.querySelector('.line-input');
        const checkBtn = practiceArea.querySelector('.check-answer-btn');
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkReciteLine(input.value);
            }
        });
        
        checkBtn.addEventListener('click', () => {
            this.checkReciteLine(input.value);
        });
        
        input.focus();
    }

    checkReciteLine(userInput) {
        const correctLine = this.currentPoem.content[this.currentLineIndex].line;
        const normalizedInput = userInput.trim();
        const normalizedCorrect = correctLine.trim();
        
        if (normalizedInput === normalizedCorrect) {
            this.showFeedback('正确！', 'success');
            this.currentLineIndex++;
            
            if (this.currentLineIndex >= this.currentPoem.content.length) {
                setTimeout(() => {
                    this.completePractice();
                }, 1000);
            } else {
                setTimeout(() => {
                    this.renderReciteInterface();
                    this.clearFeedback();
                }, 1500);
            }
        } else {
            const encouragement = encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)];
            this.showFeedback(`${encouragement} 正确答案是："${correctLine}"`, 'error');
        }
    }

    completePractice() {
        this.practiceActive = false;
        this.completedPoems.add(this.currentPoemIndex);
        this.stars++;
        
        this.saveProgress();
        this.showRewardAnimation();
        
        this.elements.resetPractice.style.display = 'none';
        this.elements.startPractice.style.display = 'block';
        this.elements.practiceArea.innerHTML = '';
        
        this.renderPoemContent();
        this.updateProgress();
        
        const congratulation = congratulationMessages[Math.floor(Math.random() * congratulationMessages.length)];
        setTimeout(() => {
            this.showFeedback(congratulation, 'success');
        }, 2000);
    }

    showRewardAnimation() {
        this.elements.rewardAnimation.style.display = 'flex';
        setTimeout(() => {
            this.elements.rewardAnimation.style.display = 'none';
        }, 2000);
    }

    resetPractice() {
        this.practiceActive = false;
        this.practiceMode = null;
        this.currentLineIndex = 0;
        
        this.elements.resetPractice.style.display = 'none';
        this.elements.startPractice.style.display = 'block';
        this.elements.practiceArea.innerHTML = '';
        
        this.renderPoemContent();
        this.clearFeedback();
    }

    prevPoem() {
        if (this.currentPoemIndex > 0) {
            this.currentPoemIndex--;
        } else {
            this.currentPoemIndex = poemsData.length - 1; // 循环到最后一首
        }
        
        this.resetPractice();
        this.displayPoem();
        this.updateNavigationButtons();
    }

    nextPoem() {
        if (this.currentPoemIndex < poemsData.length - 1) {
            this.currentPoemIndex++;
        } else {
            this.currentPoemIndex = 0; // 循环到第一首
        }
        
        this.resetPractice();
        this.displayPoem();
        this.updateNavigationButtons();
    }

    // 更新导航按钮状态
    updateNavigationButtons() {
        // 所有按钮都保持可用，支持循环翻页
        this.elements.prevPoem.style.opacity = '1';
        this.elements.nextPoem.style.opacity = '1';
        this.elements.prevPoem.disabled = false;
        this.elements.nextPoem.disabled = false;
    }

    showFeedback(message, type) {
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = `feedback-message ${type}`;
        feedbackDiv.textContent = message;
        
        this.elements.feedbackArea.innerHTML = '';
        this.elements.feedbackArea.appendChild(feedbackDiv);
    }

    clearFeedback() {
        this.elements.feedbackArea.innerHTML = '';
    }

    updateProgress() {
        this.elements.starCount.textContent = this.stars;
        this.elements.currentPoemIndex.textContent = this.currentPoemIndex + 1;
    }

    saveProgress() {
        const progress = {
            stars: this.stars,
            completedPoems: Array.from(this.completedPoems),
            currentPoemIndex: this.currentPoemIndex
        };
        localStorage.setItem('littlePoetProgress', JSON.stringify(progress));
    }

    loadProgress() {
        const saved = localStorage.getItem('littlePoetProgress');
        if (saved) {
            const progress = JSON.parse(saved);
            this.stars = progress.stars || 0;
            this.completedPoems = new Set(progress.completedPoems || []);
            this.currentPoemIndex = progress.currentPoemIndex || 0;
        }
    }
}

// 等待页面加载完成后初始化游戏
document.addEventListener('DOMContentLoaded', () => {
    // 确保语音API可用
    if ('speechSynthesis' in window) {
        // 在某些浏览器中需要先加载语音列表
        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) {
                console.log('语音朗读功能已准备就绪');
            }
        };
        
        if (window.speechSynthesis.getVoices().length > 0) {
            loadVoices();
        } else {
            window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
        }
    }
    
    // 初始化游戏
    const game = new LittlePoetGame();
    
    // 将游戏实例暴露到全局，便于调试
    window.littlePoetGame = game;
});