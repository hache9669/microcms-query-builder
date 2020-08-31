import * as moment from "moment";

export default interface SampleInterface {
    num: number;
    str: string;
    bol: boolean;
    dat: Date;
    mom: moment.Moment;
    obj: { id: string; [p: string]: any };
    arr: Array<{ id: string; [p: string]: any }>;
}
