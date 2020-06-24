import React from "react";

import {Review} from "./Review/Review";
import './reviews.css'
import ekaterina from '../../media/images/reviewers/reviewer.png'
import {Carousel} from "../../common/Carousel/Carousel";
import {SubTitle} from "../../common/Typography/SubTitle";
import {TitleLg} from "../../common/Typography/TitleLg";

const reviewersData = [
    {
        id: "1",
        reviewerInfo: {
            name: 'Екатерина Иванова',
            company: 'Директор ООО “Раз-два”',
            photo: ekaterina,
        },
        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является' +
            ' стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
    },
    {
        id: "2",
        reviewerInfo: {
            name: 'Екатерина Петрова',
            company: 'Владелец ООО “Раз-два”',
            photo: 'https://img2.freepng.ru/20180403/eqe/kisspng-computer-icons-teacher-clip-art-avatar-5ac3db46122e89.4817606315227850940745.jpg',
        },
        text: 'In facilisis mi nisi, eu imperdiet nisl lobortis sed. Vivamus turpis lacus, elementum sit amet efficitur et, euismod eget sapien. Quisque ultricies leo id euismod aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean commodo vel metus sit amet lacinia. Vivamus hendrerit eu orci et bibendum. Aliquam venenatis sagittis fermentum.',
    },
    {
        id: "3",
        reviewerInfo: {
            name: 'Екатерина Земляничкина',
            company: 'Главный менеджер ООО “Раз-два”',
            photo: 'https://st3.depositphotos.com/1432405/13633/v/950/depositphotos_136332746-stock-illustration-brunette-girl-icon-flat-style.jpg',
        },
        text: 'Quisque euismod urna eget nulla ultrices mollis. Aliquam rhoncus venenatis nulla, vel euismod justo fermentum eu. Maecenas pharetra turpis ac eros hendrerit fermentum. Curabitur sollicitudin sem ac massa malesuada, sit amet euismod enim scelerisque. Etiam eget risus at nibh mollis commodo nec ac dolor. Praesent sit amet est id mauris tempor congue. Sed porttitor egestas gravida. Etiam ex arcu, cursus venenatis sapien blandit, mattis eleifend risus. Nulla nec sem condimentum, sollicitudin nunc sed, volutpat arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sit amet orci aliquam, congue diam non, ultricies ipsum. Nunc faucibus, augue id feugiat auctor, elit orci posuere diam, at ornare lectus massa eget ante. ',
    },
    {
        id: "4",
        reviewerInfo: {
            name: 'Екатерина Ефимова',
            company: 'Почти Директор ООО “Раз-Три”',
            photo: 'https://okna5.ru/wp-content/uploads/2016/06/flat-faces-icons-circle-16.png'
        },
        text: 'Pellentesque eget fringilla felis, ut dignissim quam. Integer bibendum vehicula sem, vel tincidunt erat dignissim eu. Mauris quis mi congue, gravida purus ac, molestie purus. Praesent quis quam sit amet purus scelerisque iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas pulvinar nulla dolor, egestas fringilla felis egestas vitae. Suspendisse tincidunt viverra arcu. Fusce pellentesque mattis leo, et sollicitudin dolor vulputate in. Morbi et nisl quis lorem euismod efficitur. Proin at ante congue, fringilla diam in, cursus nunc. Aliquam ut risus dignissim, eleifend felis non, vulputate leo. Cras vitae velit vel ipsum egestas luctus. Curabitur egestas suscipit leo, eget pellentesque nisi elementum id.',
    },

]

export const Reviews = (props) => {
    const Reviewers = reviewersData.map(reviewer => {
        return (
            <Review key={reviewer.id}
                    name={reviewer.reviewerInfo.name}
                    company={reviewer.reviewerInfo.company}
                    src={reviewer.reviewerInfo.photo}
                    text={reviewer.text}
            />
        )
    })
    return (
        <section className={"container review-container section-container"}>
            <SubTitle>
                Отзывы
            </SubTitle>
            <TitleLg>
                Ваши благодарности
            </TitleLg>
            <Carousel>
                {Reviewers}
            </Carousel>
        </section>
    )
}