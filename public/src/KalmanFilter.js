class KalmanFilter {
    constructor(initialState, initialProcessError = 1, initialMeasurementError = 1, processNoise = 0.1, measurementNoise = 0.1) {
        this.state = initialState;
        this.processError = initialProcessError;
        this.measurementError = initialMeasurementError;
        this.processNoise = processNoise;
        this.measurementNoise = measurementNoise;
    }

    predict() {
        this.processError += this.processNoise;
        return this.state; // assuming constant velocity model, no update to the state itself
    }

    update(measurement) {
        const kalmanGain = this.processError / (this.processError + this.measurementNoise);
        this.state += kalmanGain * (measurement - this.state);
        this.processError = (1 - kalmanGain) * this.processError;
    }
}

export default KalmanFilter;