import { NavLink } from 'react-router-dom'
import NewItem from '~/component/customs/NewItem'
import Pagination from '~/component/customs/Pagination'
import useQuery from '~/hook/useQuery'
import { useTranslation } from 'react-i18next'

function Tabs() {
    const query = useQuery()
    const { t } = useTranslation(['news'])

    const LIST_TABS_ITEM: { path: string; title: string }[] = t('tabs', { returnObjects: true })

    return (
        <div className='flex flex-col gap-8'>
            <div className='flex gap-8 overflow-x-auto scroll-0'>
                {LIST_TABS_ITEM.map((item, index) => (
                    <div
                        key={index}
                        className='lg:text-xl text-lg leading-7 font-bold not-italic uppercase w-auto whitespace-nowrap'
                    >
                        <NavLink
                            key={index}
                            to={`?q=${item.path}`}
                            className={`${query.get('q') === item.path ? 'text-default' : 'text-[#7A7A7A]'} block`}
                        >
                            {item.title}
                        </NavLink>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-12 gap-x-3 gap-y-5 '>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-full'>
                        <NewItem
                            img='https://s3-alpha-sig.figma.com/img/3f80/fc26/161247dffd6b96d2471005e5ed9021fa?Expires=1692576000&Signature=NX121u-cI3dPw7qSav-OYm66xana7CsFn~KgyzJDoEp5JPIy2EKU2zVPKzw6zvpY5Aa4SYIxhgZKh8-oCM8gn~C5aTF4T~axbIjC3kI-DfHfUJBl3VuuM9xVe-YzSYrmtoLaNMWIMj2l04hPuPUSuK41QJo7JClnJ2mDAuk-ZnTHa093lg6TgLUrg17tYqbYQa8WPgw9yblyTNckwJUqy1PCpyfsfWsw5oOcx~-QjVctb7K0LCR1XtVMhMJKnFZxFhJS-XehrgCSFristgu6dytYVBfH6X9J-tWLtfXg-rbtouJiML2MT0tXGNamIkOszA8ZG~kRQ-yC8P5iBC5LOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                            useName='Le Link'
                            date='May 4th 2023'
                            title='Chuyển đổi số ngành truyền thông đại chúng: xu hướng mới trong lĩnh vực công nghệ số'
                            description='Chuyển đổi số đang ảnh hưởng đến mọi ngành công nghiệp và ngành truyền thông cũng không ngoại lệ...'
                            _id={''}
                        />
                    </div>
                ))}

                <div className='col-span-12 mt-10 mb-10 flex justify-center items-center'>
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default Tabs
