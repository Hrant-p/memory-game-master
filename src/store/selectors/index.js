const gameSelector = state => state.get("gameReducer");

export const layoutSelector = state => gameSelector(state).get("layout");
