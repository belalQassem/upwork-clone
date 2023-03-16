import { useReducer } from "react";

const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

const initialState = {
  jobs: savedJobs,
  count: parseInt(localStorage.getItem("count")) || 0,
};

const ACTIONS = {
  SAVE_JOB: "addToSaved",
  UN_SAVE_JOB: "removeFromSaved",
};

const Reduce = (state, action) => {
  switch (action.type) {
    case ACTIONS.SAVE_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
        count: state.count + 1,
      };
    case ACTIONS.UN_SAVE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.payload),
        count: state.count - 1,
      };

    default:
      return state;
  }
};

const useJob = () => {
  const [state, dispatch] = useReducer(Reduce, initialState);

  const addToSaved = (job) =>
    dispatch({ type: ACTIONS.SAVE_JOB, payload: job });
  const removeFromSaved = (jobId) =>
    dispatch({ type: ACTIONS.UN_SAVE_JOB, payload: jobId });

  return {
    state,
    addToSaved,
    removeFromSaved,
  };
};

export default useJob;
