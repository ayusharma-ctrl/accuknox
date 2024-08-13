import { useSelector } from 'react-redux';
import { ICategory } from '@/lib/utils';
import { widgetsData } from '@/store/slices/widgetSlice';
import Widget from './Widget';

const CategorySection: React.FC<ICategory> = ({ id, label }) => {
    const { widgets } = useSelector(widgetsData); // fetch list of widgets from store

    return (
        <div className='my-4'>
            <h1 className='text-sm font-semibold capitalize'>{label}</h1>
            <div className='flex flex-wrap justify-start items-center gap-2'>
                {/* this way cards will render in a fixed order - for e.g., Card 2 will always render right next to Card 1 or at the first place */}
                {
                    widgets && widgets.map((data, idx) => {
                        if (data.selected && data.parentCategory === id) {
                            return <Widget key={idx} data={data} />
                        }
                    })
                }
                <Widget data={null} categoryId={id} />
            </div>
        </div>
    )
}

export default CategorySection