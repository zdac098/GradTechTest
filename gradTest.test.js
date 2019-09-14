function createMenuData(data) {
    let myArray = new Array();
    for(s of data) {
        if(s.includes("/")) {
            const currentString = s;
            const splits = currentString.split('/');
            const already = exist(splits[0]);
            //console.log(already);
            if(already == false) {
                let myObject = {
                    title: splits[0],
                    data: [splits[1]],
                }
                myArray.push(myObject);
            } else {
                const objIndex = myArray.findIndex(obj => obj.title === splits[0]);
                myArray[objIndex].data.push(splits[1]);
                //console.log(objIndex);
            }
            //console.log(myObject);
        }
    }
    console.log(myArray);
    function exist(title) {
        return myArray.some(function (el) {
            return el.title === title;
        })
    }
    return myArray;
}

describe("menu Data Generator", () => {
    it("creates correct data structure ", () => {
      const data = [
        "parent1/parent1child",
        "parent1/parent1child2",
        "parent2/parent2child",
        "parent2/parent2child2",
        "parent1/parent1child3",
        "parent3",
        "parent3/parent3child1",
        "parent4"
      ];
  
      const expectedResult = [
        {
          title: "parent1",
          data: ["parent1child", "parent1child2", "parent1child3"]
        },
        { title: "parent2", data: ["parent2child", "parent2child2"] },
        { title: "parent3", data: ["parent3child1"] }
      ];
  
      const actualResult = createMenuData(data);
      expect(actualResult).toMatchObject(expectedResult);
    });
  });