import { faker } from '@faker-js/faker';
import TrendingVideos from './TrendingVideos';

const exploreList = (activeSubject) => {
  let business_items = [];
  let technology_items = [];
  let science_items = [];
  let world_items = [];
  let politics_items = [];
  const count = 3;

  const fakeItem = () => {
    return {
      id: faker.string.uuid(),
      avatar: faker.image.avatarLegacy(),
      authorName: faker.person.fullName(),
      channel: ['U.S.', 'World', 'Politics'][Math.floor(Math.random() * 3)],
      date: faker.date.recent().toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }),
      countofsource: Math.floor(Math.random() * 50),
      shortText: faker.lorem.sentence({ min: 7, max: 7 }),
      description: faker.lorem.sentence({ min: 13, max: 13 }),
      minToRead: Math.floor(Math.random() * 10),
      newsImg: ['/img/news/meeting2.png', '/img/news/meeting3.png', '/img/news/meeting4.png'][Math.floor(Math.random() * 3)]
    };
  };

  for (let i = 0; i < count; i++) {
    const businessItem = fakeItem();
    const technologyItem = fakeItem();
    const scienceItem = fakeItem();
    const worldItem = fakeItem();
    const politicsItem = fakeItem();

    business_items.push(businessItem);
    technology_items.push(technologyItem);
    science_items.push(scienceItem);
    world_items.push(worldItem);
    politics_items.push(politicsItem);
  }

  const retVal = {
    Business: business_items,
    Technology: technology_items,
    Science: science_items,
    World: world_items,
    Politics: politics_items
  };

  return retVal[activeSubject];
};

function sleepFor(sleepDuration) {
  var now = new Date().getTime();
  while (new Date().getTime() < now + sleepDuration) {
    /* Do nothing */
  }
}

export default function handler(req, res) {
  const { slug } = req.query;
  const params = JSON.parse(req.body);

  if (slug[0] === 'mainpost') {
    //sleepFor(9500);

    const mainPost = {
      title: 'To set a background image for a div using Next.js using Next.js and Tailwind CSS background',
      content: 'To set a background image for a div using Next.js and Tailwind CSS, you can use the background class in your HTML element.',
      emoji_char: '🌎'
    };
    res.status(200).json(JSON.stringify(mainPost));
  } else if (slug[0] === 'featuredposts') {
    const featuredPost = {
      title: 'Featured background image for a div using Next.js',
      content: 'To set a background image for a div using Next.js and Tailwind CSS, you can use the background class in your HTML element.',
      poster: 'Michael Stan',
      hourToRead: 1,
      emoji_char: '🌎'
    };
    <TrendingVideos/>
    const result = {
      featuredPost: featuredPost
    };
    res.status(200).json(JSON.stringify(result));
  } else if (slug[0] === 'mainpostsubarticles') {
    const subarticleList = [
      {
        subject: 'WORLD',
        supporter: 'CNN',
        desc: '1In the example above, the dot will be inserted into the element.',
        emoji_char: '🌎'
      },
      {
        subject: 'POLITICS',
        supporter: 'Yahoo News',
        desc: '2In the example above, the dot will be inserted into the element.',
        emoji_char: '🌎'
      },
      {
        subject: 'WORLD',
        supporter: 'New York Times',
        desc: '3In the example above, the dot will be inserted into the element.',
        emoji_char: '🌎'
      },
      {
        subject: 'WORLD',
        supporter: 'Yahoo News',
        desc: '4In the example above, the dot will be inserted into the element.',
        emoji_char: '🌎'
      }
    ];
    res.status(200).json(JSON.stringify(subarticleList));
  } else if (slug[0] === 'explore') {
    const { activeSubject } = params;
    const storyList = exploreList(activeSubject);
    //sleepFor(9500);
    res.status(200).json(JSON.stringify(storyList));
  } else if (slug[0] === 'topstories') {
    res.end(`POST: topstories`);
  } else if (slug[0] === 'videos') {
    res.end(`POST: videos`);
  } else if (slug[0] === 'exploretrendingtopics') {
    res.end(`POST: explore trending topics`);
  }
}
