interface IMicroCMSSearchable {
    [p: string]:
        | IMicroCMSPrimitiveLike
        | IMicroCMSReferableObject
        | IMicroCMSReferableObject[];
}

export type IMicroCMSPrimitiveLike = string | number | boolean;
// @TODO support Date-like types
// | moment.Moment
// | Date;

interface IMicroCMSReferableObject {
    id: string;
    [p: string]: string | number | boolean | IMicroCMSReferableObject;
}

export default IMicroCMSSearchable;
