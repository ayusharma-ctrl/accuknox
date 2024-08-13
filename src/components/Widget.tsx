import {
    Card,
    CardContent,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { useDispatch } from "react-redux"
import { setAddWidgetBar, updateCategory } from "@/store/slices/widgetSlice"
import { ChartNoAxesCombined, Plus } from "lucide-react"
import { IWidget } from "@/lib/utils"

interface IWidgetCard {
    data: IWidget | null,
    categoryId?: number,
}

const Widget: React.FC<IWidgetCard> = ({ data, categoryId }) => {
    const dispatch = useDispatch();

    // method to open sidebar
    const handleAddWidget = () => {
        try {
            if(categoryId) {
                dispatch(updateCategory({id: categoryId}));
                dispatch(setAddWidgetBar());
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Note: based on card id - 
    // - we can call the apis to fetch data from the server or read from the local store
    // - we can conditionally render the data in a card - charts - graphs - etc
    // If data prop is null, that means we can render a button in a card to add widget

    return (
        <Card className="w-[350px] h-[200px] my-2 drop-shadow-sm">
            <CardContent className="h-full">
                <CardTitle className="text-sm font-medium my-2 capitalize">{data?.label ? data.label : null}</CardTitle>
                <div className={`${data ? 'h-5/6' : 'h-full'} flex justify-center`}>
                    {!data && (
                        <Button onClick={handleAddWidget} variant={'outline'} className='rounded-md my-auto'>
                            <Plus size={15} strokeWidth={1.25} className='mx-2' />
                            Add widget
                        </Button>
                    )}
                    {data && (
                        data.id === 1 ? (
                            <div className="w-full text-xs text-red-500 font-medium">Connected Accounts: 2</div>
                        ) : (
                            <div className="flex flex-col items-center gap-2 text-xs my-auto">
                                <ChartNoAxesCombined size={50} strokeWidth={0.75} />
                                <p>No Graph data available!</p>
                            </div>
                        )
                    )}
                </div>
            </CardContent>
        </Card>
    )
}

export default Widget;