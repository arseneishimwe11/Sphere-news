import { SocialCardComponent } from "../ArticlesComponent";

const social_card_info = [
    {
        img: '/img/news/meeting.png',
        reporter_img: '/img/avatar/6.png',
        reporter_name: 'Akahan',
        date: 'Aug 20, 2021',
        description: 'Ungewollten Worter stehen. Viele der Generation im internet neigen dazu, vorge ferigte Stuke zu wiederholen - was es notig',
        site: 'Twiter',
        time: '6:25 AM'
    },
    {
        img: '/img/news/football.png',
        reporter_img: '/img/avatar/7.png',
        reporter_name: 'Akahan',
        date: 'Aug 20, 2021',
        description: 'Ungewollten Worter stehen. Viele der Generation im internet neigen dazu, vorge ferigte Stuke zu wiederholen - was es notig',
        site: 'Twiter',
        time: '6:25 AM'
    },
    {
        img: '/img/news/blue.png',
        reporter_img: '/img/avatar/7.png',
        reporter_name: 'Akahan',
        date: 'Aug 20, 2021',
        description: 'Ungewollten Worter stehen. Viele der Generation im internet neigen dazu, vorge ferigte Stuke zu wiederholen - was es notig',
        site: 'Twiter',
        time: '6:25 AM'
    }
];

export const MobileSocialTabContent = () => {

    return (
        <div className="flex flex-row gap-4 overflow-auto">
            {
                social_card_info.map((item, index) => (
                    <SocialCardComponent
                        key={index}
                        img={item.img}
                        reporter_img={item.reporter_img}
                        reporter_name={item.reporter_name}
                        date={item.date}
                        description={item.description}
                        site={item.site}
                        time={item.time}
                    />
                ))
            }
        </div>
    )
}