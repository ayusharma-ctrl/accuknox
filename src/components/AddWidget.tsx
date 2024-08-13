import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useDispatch, useSelector } from 'react-redux'
import { setAddWidgetBar, widgetsData } from '@/store/slices/widgetSlice'
import { categories } from "@/lib/utils"
import ListWidgets from "./ListWidgets"


const AddWidget = () => {
    const { addWidgetBar, selectedCategory } = useSelector(widgetsData);
    const dispatch = useDispatch();

    const handleSidebar = () => {
        dispatch(setAddWidgetBar());
    }

    return (
        <Sheet open={addWidgetBar} onOpenChange={handleSidebar}>
            <SheetContent className="p-0 min-w-[40%]">
                <SheetHeader className="p-3 bg-blue-500">
                    <SheetTitle className="text-white">Add Widget</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 max-h-full mt-2 mb-10 p-4 overflow-y-auto">
                    <p className="font-normal text-xs lg:text-base">Personalise your dashboard by adding the following widget</p>
                    <div>
                        <Tabs defaultValue={categories[selectedCategory - 1].label} className="max-w-full">
                            <TabsList>
                                {categories.map((category) => (
                                    <TabsTrigger key={category.id} value={category.label}>
                                        {category.label.split(' ')[0]}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                            {categories.map((category) => (
                                <TabsContent key={category.id} value={category.label}>
                                    <div className="my-8">
                                        <ListWidgets categoryId={category.id} />
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full p-3 z-10">
                    
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default AddWidget