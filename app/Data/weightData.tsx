
class Weight {
    monW = 99.5;
    monN = "mon";
    tueW = 0;
    tueN = "tue";
    wedW = 100;
    wedN = "wed";
    thuW = 0;
    whuN = "thu";
    friW = 0;
    friN = "fri";
    satW = 0;
    satN = "sat"
    sunW = 0;
    sunN = "sun";
    get nonZeroCount() {
        return [this.monW, this.tueW, this.wedW, this.thuW, this.friW, this.satW, this.sunW]
            .filter(w => w !== 0)
            .length;
    }
    get weekAvg() {
        const weights = [this.monW, this.tueW, this.wedW, this.thuW, this.friW, this.satW, this.sunW];
        const nonZeroWeights = weights.filter(w => w !== 0);
        return nonZeroWeights.length > 0
            ? nonZeroWeights.reduce((a, b) => a + b, 0) / nonZeroWeights.length
            : 0;
    }

}

export default new Weight();