export type PressureMonitorOptions = {
    maxEventLoopDelay?: number | false;
    maxEventLoopUtilization?: number | false;
    maxMemoryHeapUsed?: number | false;
    maxMemoryRss?: number | false;
    sampleInterval?: number;
    resolution?: number;
};
export declare class PressureMonitor {
    private memoryHeapUsed;
    private memoryRss;
    private eventLoopDelay;
    private eventLoopUtilization;
    private options;
    private histogram;
    private timeout;
    constructor(options?: PressureMonitorOptions);
    get overloaded(): boolean;
    private updateUsage;
    private updateMemoryUsage;
    private updateEventLoopUsage;
}
