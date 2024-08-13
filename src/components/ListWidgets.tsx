import { useDispatch, useSelector } from 'react-redux';
import { addRemoveWidget, widgetsData } from '@/store/slices/widgetSlice';
import { Checkbox } from './ui/checkbox';
import { toast } from 'sonner';

interface IPropsListWidgets {
    categoryId: number;
}

const ListWidgets: React.FC<IPropsListWidgets> = ({ categoryId }) => {
    const { widgets } = useSelector(widgetsData);
    const dispatch = useDispatch();

    // method to add/remove widget
    const handleChange = (id: number) => {
        try {
            dispatch(addRemoveWidget({ id }));
            toast.success("Saved...!");
        } catch (err) {
            toast.error("Failed to save!");
            console.error(err);
        }
    };

    return (
        <>
            {widgets && widgets.filter((widget) => widget.parentCategory === categoryId).map((widget) => (
                <div key={widget.id} className="flex items-center space-x-2 my-4">
                    <Checkbox
                        id={widget.label}
                        checked={widget.selected}
                        onClick={() => handleChange(widget.id)}
                    />
                    <label
                        htmlFor={widget.label}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        {widget.label}
                    </label>
                </div>
            ))}
        </>
    );
};

export default ListWidgets;