import * as moment from "moment";

/**
 * @TODO moment, Dateはパース処理を実装すること
 */
interface IMicroCMSSearchable {
    [p: string]:
        | string
        | number
        | boolean
        | moment.Moment
        | Date
        | IMicroCMSReferableObject
        | IMicroCMSReferableObject[];
}

interface IMicroCMSReferableObject {
    id: string;
    [p: string]: string | number | boolean | IMicroCMSReferableObject;
}

export default IMicroCMSSearchable;
