module.exports = {
  splitInput: function(value) {
		let arr = [];

		if (value.length === 1) {
			console.log('length equals 1');
			arr[0] = value;
			arr[1] = value;
		}
		
		if (value.length === 2) {
			console.log('length equals 2');
			arr[0] = value.substring(0, 1);
			arr[1] = value.substring(1, 2);
		}
		
		if (value.length === 3) {
			console.log('length equals 3');
			arr[0] = value.substring(0, 1);
			arr[1] = value.substring(1, 2);
			arr[2] = value.substring(2, 3);
		}

		return arr;
	},
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
			return 'Eingabe zu lang. MAX 3 Buchstaben.';
		}

		start = this.joinValue(startArr);

		return start;
	}
};
