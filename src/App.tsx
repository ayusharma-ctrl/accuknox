import { useDispatch } from 'react-redux'
import { categories, timelineOptions } from './lib/utils'
import { Clock, EllipsisVertical, Plus, RefreshCcw } from 'lucide-react'
import { setAddWidgetBar } from './store/slices/widgetSlice'
import { Button } from './components/ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './components/ui/select'
import Navbar from './components/Navbar'
import CategorySection from './components/CategorySection'
import AddWidget from './components/AddWidget'

function App() {
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(setAddWidgetBar()); // open side dialog
  }

  return (
    <>
      <Navbar />
      <div className='my-8 px-8 w-full flex justify-between items-center'>
        <h1 className='font-bold'>CNAAP Dashboard</h1>
        <div className='flex flex-wrap justify-end items-center gap-4'>
          <Button variant={'outline'} className='rounded-lg' onClick={handleSidebar}>
            Add widget
            <Plus size={15} strokeWidth={1.25} className='mx-2' />
          </Button>
          <Button variant={'outline'} size={'icon'} className='rounded-lg'>
            <RefreshCcw size={16} strokeWidth={1.25} />
          </Button>
          <Button variant={'outline'} size={'icon'} className='rounded-lg'>
            <EllipsisVertical size={16} strokeWidth={1.25} />
          </Button>
          <Select>
            <SelectTrigger className="w-[180px]">
              <Clock size={20} strokeWidth={1.5} />
              <span>|</span>
              <SelectValue placeholder="Select a timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Timeline</SelectLabel>
                {
                  timelineOptions.map((option, idx) => <SelectItem key={idx} value={option.value}>{option.label}</SelectItem>)
                }
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className='my-8 px-8 w-full flex flex-col items-start'>
        {categories && categories.map((category, idx) => <CategorySection key={idx} id={category.id} label={category.label} />)}
      </div>
      <AddWidget />
    </>
  )
}

export default App
