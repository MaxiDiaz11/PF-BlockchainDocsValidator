import { UiState } from "./";

type UiActionType =
  | { type: "UI-ToggleMenu" }
  | { type: "UI-ToggleModal"; payload: string }
  | { type: "UI-CloseModal" };

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case "UI-ToggleMenu":
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    case "UI-ToggleModal":
      return {
        ...state,
        modalOption: action.payload,
        isModalOpen: !state.isModalOpen,
      };
    case "UI-CloseModal":
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};
