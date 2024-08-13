import { IWidget, widgets } from '@/lib/utils';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface IState {
    widgets: IWidget[],
    selectedCategory: number,
    isLoading: boolean,
    addWidgetBar: boolean,
}

const initialState: IState = {
    widgets,
    selectedCategory: 1,
    isLoading: false,
    addWidgetBar: true,
};

const widgetSlice = createSlice({
    name: 'widgets',
    initialState,
    reducers: {
        // add or remove widget
        addRemoveWidget: (state, action: PayloadAction<{ id: number }>) => {
            const updatedList = state.widgets.map(widget => {
                if (widget.id === action.payload.id) {
                    return { ...widget, selected: !widget.selected };
                }
                return widget;
            });
            state.widgets = updatedList;
        },

        // save recently clicked category
        updateCategory: (state, action: PayloadAction<{ id: number }>) => {
            state.selectedCategory = action.payload.id;
        },

        setLoader: (state) => {
            state.isLoading = !state.isLoading;
        },

        // open or close side dialog
        setAddWidgetBar: (state) => {
            state.addWidgetBar = !state.addWidgetBar;
        },
    }
});

export const widgetsData = (state: RootState) => state.widget;
export const { addRemoveWidget, updateCategory, setLoader, setAddWidgetBar } = widgetSlice.actions;
export default widgetSlice.reducer;