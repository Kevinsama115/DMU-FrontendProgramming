type MyLocation = {
    country: string;
    city: string;
    zipCode: string;
};

interface Company {
    name: string;
    employee: number;
    location: MyLocation;
}

const company: Company = {
    name: "코딩연구소",
    employee: 5,
    location: {
        country: "대한민국",
        city: "서울",
        zipCode: "12345"
    }
};

console.log(company);