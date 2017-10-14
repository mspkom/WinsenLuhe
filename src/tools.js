module.exports = {
	isVocal: function(val) {
		const vocals = ['A', 'Ä', 'E', 'I', 'O', 'Ö', 'U', 'Ü'];

		return vocals.indexOf(val) === -1 ? false : true;
	},
	splitValue: function(val) {
		return val.split('');
	},
	joinValue: function(val) {
		return val.join('');
	},
	changeOne: function(startArr, val) {
		let isVocal = this.isVocal(val);

		if (isVocal) {
			startArr[1] = val;
			startArr[9] = val;
		} else {
			startArr[0] = val;
			startArr[8] = val;
		}

    return startArr;
	},
	changeTwo: function(startArr, valArr) {
		valArr.map((val, i) => {
			let isVocal = this.isVocal(val);

			if (i === 0) {
				if (isVocal) { startArr[1] = val } else { startArr[0] = val }
			}

			if (i === 1) {
				if (isVocal) { startArr[9] = val } else { startArr[8] = val }
			}

    return startArr;
		});
	},
	changeThree: function(startArr, valArr) {
		let first = false;

		valArr.map((val, i) => {
			let isVocal = this.isVocal(val);

			if (i === 0) {
				if (isVocal) {
					startArr[1] = val;
					first = true;
				} else {
					startArr[0] = val;
				}
			}

			if (i === 1) {
				if (isVocal && !first) {
					startArr[1] = val;
				}
				if (isVocal && first) {
					startArr[4] = val;
				}
				if (!isVocal && !first) {
					startArr[2] = val;
				}
				if (!isVocal && first) {
					startArr[2] = val;
				}
			}

			if (i === 2) {
				if (isVocal) { startArr[9] = val } else { startArr[8] = val }
			}

      return startArr;
		});
	},
	getStop: function(start, val) {
		let startArr = this.splitValue(start);
		const valArr = this.splitValue(val);

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

		start = this.joinValue(startArr);

		return start;
	}
};
