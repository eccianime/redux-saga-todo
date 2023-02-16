export type TodoRouteParams = {
  id?: string;
  text?: string;
  icon?: string;
  color?: string;
};

export type TodoParamList = {
  Todo: undefined;
  'Todo Details': TodoRouteParams;
};
