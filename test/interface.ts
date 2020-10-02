import * as moment from "moment";

import IMicroCMSSearchable from "../src/types/IMicroCMSSearchable";

export default interface SampleInterface extends IMicroCMSSearchable {
    num: number;
    str: string;
    bol: boolean;
    dat: Date;
    mom: moment.Moment;
    obj: { id: string; [p: string]: string | number | boolean };
    arr: Array<{ id: string; [p: string]: string | number | boolean }>;
}
