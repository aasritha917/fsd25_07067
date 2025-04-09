function cleanTags(tags){
    const cleaned =tags.map(tag=>tag .trim().toLowerCase().replace(/[^a-z0-9]/g, '')
    );
    const uniqueTags =[...new Set(cleaned)]
    return uniqueTags.join(', ')
}
const inputTags =
[
    " JavaScript ",
    "python",
    "JAVASCRIPT",
    " machine-learning",
    "Python  ",
    " Data Science!",
    "machine_learning"
  ]
  console.log(cleanTags(inputTags ))