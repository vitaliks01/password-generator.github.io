const {
    getRandomInteger,
    generateRandomNumber,
    generateLowerCase,
    generateUpperCase,
    generateSymbol,
    shufflePassword,
} = require('./passwordGenerator');

describe('Password Generator Functions', () => {

    // Test handleSlider function
  test('handleSlider updates UI correctly', () => {
    // Mock DOM elements (you can use jest.fn() for this)
    const inputSlider = { value: 8 };
    const lengthdisplay = { innerText: '' };

    handleSlider.call({
      inputSlider,
      lengthdisplay,
    });

    expect(lengthdisplay.innerText).toBe('8');
    // Add more assertions as needed
  });
    
    // Test setIndicator function
  test('setIndicator sets color correctly', () => {
    // Mock DOM element
    const indicator = { style: { backgroundColor: '', boxShadow: '' } };

    setIndicator.call({
      indicator,
    }, '#ff0000'); // Example color

    expect(indicator.style.backgroundColor).toBe('#ff0000');
    // Add more assertions as needed
  });

  // Test getRandomInteger function
  test('getRandomInteger returns a valid integer', () => {
    const result = getRandomInteger(10, 20);
    expect(Number.isInteger(result)).toBe(true);
    expect(result).toBeGreaterThanOrEqual(10);
    expect(result).toBeLessThanOrEqual(20);
  });
    
    // Test generateRandomNumber function
  test('generateRandomNumber returns a valid number between 0 and 9', () => {
    const result = generateRandomNumber();
    expect(Number.isInteger(result)).toBe(true);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(9);
  });

  // Test generateLowerCase function
  test('generateLowerCase returns a valid lowercase letter', () => {
    const result = generateLowerCase();
    expect(result).toMatch(/[a-z]/);
  });

  // Test generateUpperCase function
  test('generateUpperCase returns a valid uppercase letter', () => {
    const result = generateUpperCase();
    expect(result).toMatch(/[A-Z]/);
  });

  // Test generateSymbol function
  test('generateSymbol returns a valid symbol', () => {
    const result = generateSymbol();
    expect(symbols.includes(result)).toBe(true);
  });
    
    // Test calcStrength function
  test('calcStrength sets indicator color correctly', () => {
    // Mock DOM elements (you can use jest.fn() for this)
    const uppercaseCheck = { checked: true };
    const lowercaseCheck = { checked: true };
    const numberCheck = { checked: true };
    const symbolCheck = { checked: false };
    const passwordLength = 10;
    const setIndicator = jest.fn();

    calcStrength.call({
      uppercaseCheck,
      lowercaseCheck,
      numberCheck,
      symbolCheck,
      passwordLength,
      setIndicator,
    });

    expect(setIndicator).toHaveBeenCalledWith("rgb(90, 255, 7)");
    // Add more assertions as needed
  });
    
    // Test copyContent function
  test('copyContent copies password to clipboard', async () => {
    // Mock navigator.clipboard.writeText
    const originalWriteText = navigator.clipboard.writeText;
    navigator.clipboard.writeText = jest.fn(() => Promise.resolve());

    const passworddisplay = { value: 'mySecretPassword' };
    const copyMsg = { innerText: '' };

    await copyContent.call({
      passworddisplay,
      copyMsg,
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('mySecretPassword');
    expect(copyMsg.innerText).toBe('Copied');

    // Restore original function
    navigator.clipboard.writeText = originalWriteText;
  });
    
    // Test handlecheckboxChange function
  test('handlecheckboxChange updates passwordLength correctly', () => {
    // Mock DOM elements
    const allcheckbox = [
      { checked: true },
      { checked: true },
      { checked: false },
    ];
    let passwordLength = 2;

    handlecheckboxChange.call({
      allcheckbox,
      passwordLength,
      handleSlider: jest.fn(),
    });

    expect(passwordLength).toBe(3);
    // Add more assertions as needed
  });
    
    // Test shufflePassword function
  test('shufflePassword shuffles array correctly', () => {
    const inputArray = ['a', 'b', 'c', 'd'];
    const result = shufflePassword(inputArray);

    // Check if result contains the same elements as inputArray
    expect(result.split('').every((char) => inputArray.includes(char))).toBe(true);
  });

    

    
    ////////




    test('generateUpperCase generates an uppercase letter', () => {
        for (let i = 0; i < 100; i++) {
            const char = generateUpperCase();
            expect(char).toMatch(/[A-Z]/);
        }
    });

    test('generateSymbol generates a symbol from the symbols string', () => {
        const symbols = '~`!@#$%^&*()_-+={}[]\\|:;"<,>.?/';
        for (let i = 0; i < 100; i++) {
            const sym = generateSymbol();
            expect(symbols).toContain(sym);
        }
    });

    test('shufflePassword correctly shuffles the array', () => {
        const password = 'abcd1234';
        const shuffledPassword = shufflePassword(password.split('')).join('');
        expect(shuffledPassword).not.toEqual(password);
        expect(shuffledPassword.split('').sort().join('')).toEqual(password.split('').sort().join(''));
    });


    describe('validateForm', () => {
  it('should return false if name is empty', () => {
    const result = validateForm();
    expect(result).toBe(false);
  });

  it('should return false if name contains digits', () => {
    const result = validateForm();
    expect(result).toBe(false);
  });

  it('should return false if email is invalid', () => {
    const result = validateForm();
    expect(result).toBe(false);
  });

  it('should return false if contact length is not 10 or contains non-numeric characters', () => {
    const result = validateForm();
    expect(result).toBe(false);
  });

  it('should return false if password does not meet requirements', () => {
    const result = validateForm();
    expect(result).toBe(false);
  });

  it('should return false if passwords do not match', () => {
    const result = validateForm();
    expect(result).toBe(false);
  });

  it('should return true if all fields are valid', () => {
    const result = validateForm();
    expect(result).toBe(true);
  });
        
        describe('validateForm', () => {
  it('should return false if email is invalid', () => {
    const result = validateForm();
    expect(result).toBe(false);
  });

  it('should return false if password is too small', () => {
    const result = validateForm();
    expect(result).toBe(false);
  });

  it('should return true if email and password are valid', () => {
    const result = validateForm();
    expect(result).toBe(true);
  });
});

});

});


