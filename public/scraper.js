const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const getFoodObject = async () => {
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
	try {
		const { data } = await axios.get(
			'https://www.bbcgoodfood.com/recipes/collection/student-recipes'
		);
		const $ = cheerio.load(data);
		const foodTitles = [];
        const foodLinks = [];
        const foodImages = [];
        const foodObjects = [];

		$('h2.d-inline.heading-4').each((_idx, el) => {
			const postTitle = $(el).text()
			foodTitles.push(postTitle)
		});

        $('div.card__section > a.link.d-block').each((_idx, el) => {
            let link = "https://www.bbcgoodfood.com" + el.attribs.href;
			foodLinks.push(link)
		});
        var unique = foodLinks.filter(onlyUnique);
        unique.pop()

        $('main > div > div.container.post__body.post__body--masthead-layout > div.layout-md-rail > div.layout-md-rail__primary > div.post__content > div.mb-lg > div > ul > li > div > article > div.card__section.card__media > a > div > div > picture > img').each((_idx, el) => {
                foodImages.push(el.attribs.src);
		});

        for(let i = 0; i < 22; i++) {
            let foodObject = {};
            foodObject.name = foodTitles[i];
            foodObject.image = foodImages[i];
            foodObject.link = unique[i];
            foodObjects.push(foodObject)
        }
        return foodObjects
	} catch (error) {
		throw error;
	}
};

getFoodObject()
.then((postTitles) => {
    var json = JSON.stringify(postTitles);
    fs.readFile('myjsonfile.json', 'utf8', (err) => {
        if (err){
            console.log(err);
        } else {
        fs.writeFile('myjsonfile.json', json, 'utf8', () => {
            console.log("based");
        }); // write it back 
    }});
});