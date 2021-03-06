import builder from "./FilterBuilder";
import query from "./MicroCMSQuery";
import ibuilder from "./types/IFilterBuilder";
import iquery from "./types/IMicroCMSQuery";
import searchble from "./types/IMicroCMSSearchable";

export const FilterBuilder = builder;
export const MicroCMSQuery = query;

export type IFilterBuilder<T extends searchble> = ibuilder<T>;
export type IMicroCMSQuery<T extends searchble> = iquery<T>;
export type IMicroCMSSearchable = searchble;
