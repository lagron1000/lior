import { Site } from './site';

export const sites : Array<Site> = [
    {
        myName : 'Epic-Chess',
        myPic : '../../assets/epichess.png',
        myDesc :"An online and offline multiplayer Chess game made in Angular6. The Chess login was made from scratch as oposed to using a third party library. In making this project, we've used several differnt technologies. In the fron-tend we've worked with SCSS & HTML5 along with GreenSock for animation purposes. The back-end is written in NodeJS. We've use Socket.io as a means to communicating between Clients when playing online. The Chess boards and game rooms are being saved withing a MongoDB Database"
    },
    {
        myName : 'Pics4Words',
        myPic : '../../assets/site1.png',
        myDesc : 'A site in which a random word is generated for every day. the word is used as a "hashtag" to which clients upload related images. a rating system is implemented and highest rated images always show up first. The days and their respective images are saved in a mongoDB database and are always accessible'
    },
    {
        myName : 'Snakular',
        myPic : '../../assets/site2.png',
        myDesc : 'A classic Snake game done in Angular6. uses an sql database to store global highscore so players can be competitive with one another'
    }
]