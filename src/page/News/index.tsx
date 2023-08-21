import banner from '~/assets/svg/bannerIntroduction.svg'
import NewBannerItem from '~/component/customs/NewBannerItem'
import Banner from '~/component/customs/banner'
import Tabs from './component/Tabs'
import { useTranslation } from 'react-i18next'

function News() {
    const { t } = useTranslation(['news'])
    return (
        <>
            <Banner
                img={banner}
                title={t('banner.title')}
                description={t('banner.description')}
                sx='-top-12'
                pb='pb-[40%]'
            />
            <div className='flex flex-col '>
                <div className='xl:container max-auto w-full p-4 flex flex-col gap-y-20'>
                    <div className=''>
                        <h3 className='text-xl font-bold not-italic text-[#444444] mb-4'>{t('news.title')}</h3>
                        <div className='grid grid-cols-12 gap-2'>
                            <div className='lg:col-span-7 col-span-full'>
                                <NewBannerItem
                                    img='https://s3-alpha-sig.figma.com/img/7ce7/2014/ba2ca0ab1c516b94cf15cb79d78d5b40?Expires=1692576000&Signature=l-dUCKCGs0n5uNorMvnCntyMrRGUxkej82K27MsrhgzGlVTDyPBOY-zeeSHpZI~dxu0CqT4NxOZdaF5Yva5z1XEhW-lg0VNa6PDlhHBaYIMAT4~yB4grfeTPSl4JoLIjzxRANMRKxiFhZg99Rqqck0DBn6y6Rp9Dtewp5cQXXEn2kgOKfhtP2faxHm4rcrwGWDVK21gmz4LXbNu9jARZL6PQpiz74pewHMzZbS2g7QvBOOAyEmKyQiAJ3ZDeJs1aTO1Wdts-GaqmZV3hhjJ79K8~x4i~o8ncjJf934sGmkRxZPCbvK2lv6GGI9RJc5QUdLKPKr-LO4-PXOipPA1UwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                                    btnName='Phát triển phần mềm'
                                    content='Chuyển đổi số ngành sản xuất: Làm thế nào để doanh nghiệp tối ưu lợi thế trong thị trường siêu cạnh tranh?'
                                    useName='Le Link'
                                    date='May 4th 2023'
                                />
                            </div>
                            <div className='lg:col-span-5 col-span-full h-auto  '>
                                <div className='w-full grid grid-cols-12 gap-y-2'>
                                    <div className='col-span-full'>
                                        <NewBannerItem
                                            img='https://s3-alpha-sig.figma.com/img/4454/0e4d/01f8b72b77ea7b69d26c6e976e4a58f1?Expires=1692576000&Signature=WwfqEmMcMzVzLkUGZS5UAc0KJSh2Qkg1h97VaFIuhpIGJDTiYtiljHJGRUtgbDbO5bxNbHNjCMBM2BItSdgND4WZ7J-SXYWHP2-KkYnOh5CjQNWN-goT0lb3bldiblULUz80dA89AbDjxDs0G8YdGd96A2ODJRb0bp1I1wy-BRQZySmA36mwfhwYVMoNAQxwYWzgktdbqApu-te51NPiglZroZYT6kDxXazSTgE5hVoR~jxxBRRkTL16Aql99WoKDlxnvPB2qdNEvg4Nmio~xd25K4z3f9-c8sflbXkZpadPpvyJB6SIn6X~NvrCiQSH~7~IwCRG-kQf050CDvGkCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                                            btnName='BLOCKCHAIN'
                                            content='Blockchain là gì? Hoạt động và ứng dụng của Blockchain'
                                            useName='Le Link'
                                            date='May 4th 2023'
                                        />
                                    </div>
                                    <div className='col-span-full'>
                                        <NewBannerItem
                                            img='https://s3-alpha-sig.figma.com/img/105d/c089/3c970abd7aed71c3c9f9ee088ddb679c?Expires=1692576000&Signature=fE~DFPfSExasiZtvW~iF20UVMX4f5Se0Za9q7lBQTMddr954ZwHTvyVvRLTgfuuNNCkmu7XouhouJnJTJ3cRDHxbikLaNklROgx7aJkWPt63v73vdWcgPDLZMUoZX64Z21670lrSa5EhMAt00KBiv52aLH9TKmUZI7IyknN3kubRoCUsQr0Pbq7X3u7VHp~GqWwcmefRwcFqLApzL95ue-c5Xa4trIxuXuMZgVNImnWBILn3iIzqiBsRt4Zk2CQSX1FbfsC1eRrVwKhqkh~Y7Ec4vT5MDYqYndb8JBpueWdr3H~62NaywSswEml~RkTD~JqTGg-FJgPDNN1p5oHF7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                                            btnName='GAME NFT'
                                            content='NFT là gì? và ứng dụng NFT trong đời sống'
                                            useName='Le Link'
                                            date='May 4th 2023'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <Tabs />
                    </div>
                </div>
            </div>
        </>
    )
}

export default News
