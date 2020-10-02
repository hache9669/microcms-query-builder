import * as moment from "moment";

import ISchema from "../src/types/IMicroCMSSearchable";

export default interface SampleInterface extends ISchema {
    num: number;
    str: string;
    bol: boolean;
    dat: Date;
    mom: moment.Moment;
    obj: { id: string; [p: string]: any };
    arr: Array<{ id: string; [p: string]: any }>;
}
