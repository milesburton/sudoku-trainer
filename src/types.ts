export type Grid = number[][];

export interface StepExplanation {
  title: string;
  content: string;
  technique: string;
}

export interface StepHighlights {
  row: number[];
  col: number[];
  focus: number | null;
}

export interface Step {
  row: number | null;
  col: number | null;
  value: number | null;
  highlights: StepHighlights;
  explanation: StepExplanation;
}
