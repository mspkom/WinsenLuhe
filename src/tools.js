module.exports = {
  isVocal(val) {
    const vocals = ['A', 'Ä', 'E', 'I', 'O', 'Ö', 'U', 'Ü'];

    return vocals.indexOf(val) >= 0;
  },

  splitValue: val => val.split(''),

  joinValue: val => val.join(''),

  changeOne(startArr, val) {
    const isVocal = this.isVocal(val);
    const newArray = startArr;

    if (isVocal) {
      newArray[1] = val;
      newArray[9] = val;
    } else {
      newArray[0] = val;
      newArray[8] = val;
    }

    return newArray;
  },

  changeTwo(startArr, valArr) {
    const newArray = startArr;

    valArr.map((val, i) => {
      const isVocal = this.isVocal(val);

      if (i === 0) {
        if (isVocal) {
          newArray[1] = val;
        } else {
          newArray[0] = val;
        }
      }

      if (i === 1) {
        if (isVocal) {
          newArray[9] = val;
        } else {
          newArray[8] = val;
        }
      }

      return newArray;
    });
  },

  changeThree(startArr, valArr) {
    const newArray = startArr;
    let first = false;

    valArr.map((val, i) => {
      const isVocal = this.isVocal(val);

      if (i === 0) {
        if (isVocal) {
          newArray[1] = val;
          first = true;
        } else {
          newArray[0] = val;
        }
      }

      if (i === 1) {
        if (isVocal && !first) {
          newArray[1] = val;
        }
        if (isVocal && first) {
          newArray[4] = val;
        }
        if (!isVocal && !first) {
          newArray[2] = val;
        }
        if (!isVocal && first) {
          newArray[2] = val;
        }
      }

      if (i === 2) {
        if (isVocal) {
          newArray[9] = val;
        } else {
          newArray[8] = val;
        }
      }

      return newArray;
    });
  },

  getWinsenLuhe(start, val) {
    const startArr = this.splitValue(start);
    const valArr = this.splitValue(val);

    if (val === 'WL') {
      return 'WUNDERLAND';
    }

    if (val.length === 1) {
      this.changeOne(startArr, val);
    }

    if (val.length === 2) {
      this.changeTwo(startArr, valArr);
    }

    if (val.length === 3) {
      this.changeThree(startArr, valArr);
    }

    if (val.length > 3) {
      return 'Eingabe zu lang.';
    }

    return this.joinValue(startArr);
  },
};
