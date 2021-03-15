interface StateType {
  isLoading: boolean;
}

const getIsLoading = (state: StateType) => state.isLoading;

export default {
  getIsLoading,
};
