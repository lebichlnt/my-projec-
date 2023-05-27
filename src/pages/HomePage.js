import Header from "../components/Header";
import Footer from "../components/footer";
import { posts, products, projects, user } from "../dataFake";

const HomePage = () => {

    const app = document.getElementById("app");
    fetch("http://localhost:3000/User")
    .then((response) => response.json())
    .then((data) => {
        const products = data.map((User) => {
    return /*html*/`
    <div class="container">
    ${Header()}
    <div class="py-10">
        <div class="max-w-6xl mx-auto px-5">
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="my-auto col-span-1 md:col-span-2  order-2 md:order-1">
                    <h2 class="font-bold text-4xl leading-[60px] md:text-left">${User.information.name}</h2>
                    <p class="my-8 md:text-left">
                       ${User.information.description}
                    </p>
                    <button class="border rounded border-red-500 bg-red-500 text-white text-xl font-medium p-2 md:flex md:justify-start">
                        Download Resume
                    </button>
                </div>
                <div class="md:col-span-1  order-1 md:order-2 ">
                    <a href=""><img src="${User.information.img}" alt="" class="md:ml-auto md:mr-0 mx-auto rounded-full"></a>
                </div>
            </div>
        </div>
    </div>

    <section class="bg-[#EDF7FA] my-10">
        <div class="max-w-6xl mx-auto px-5">
            <div class="flex justify-between font-regular py-5">
                <h2 class="text-2xl">Recent posts</h2>
                <a href="" class="text-blue-600"><span>View all</span></a>
            </div>
            <div class="grid  md:grid-cols-2 gap-8 pb-5">
                <div class="bg-white px-8">
                    <h3 class="font-bold text-3xl mt-6"><a href="">${User.posts[0].title}</a></h3>
                    <div class="space-x-8 my-4">
                        <span>${User.posts[0].date}</span>
                        <span>|</span>
                        <span>${User.posts[0].shortdescription}</span>
                    </div>
                    <p class="mb-6">
                        ${User.posts[0].description}
                    </p>
                </div>
                <div class="bg-white px-8">
                    <h3 class="font-bold text-3xl mt-6"><a href="">${User.posts[1].title}</a></h3>
                    <div class="space-x-8 my-4">
                        <span>${User.posts[1].date}</span>
                        <span>|</span>
                        <span>${User.posts[1].shortdescription}</span>
                    </div>
                    <p class="mb-6">
                        ${User.posts[1].description}
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="max-w-6xl mx-auto px-5">
        <h2 class="text-2xl font-bold">Some Project</h2>
        <div class="grid md:grid-cols-[246px,auto] gap-8 border-b py-8">
            <div>
                <img class="w-full" src="${User.projects[0].img}" alt="">
            </div>
            <div class="my-auto">
                <h3 class="font-bold text-3xl"><a href="./Workdetail.html?id=${User.projects[0].id}">${User.projects[0].name}</a></h3>
                <div class="space-x-8 my-6">
                    <span class="rounded-2xl bg-[#142850] text-white text-lg font-black py-1 px-3">${User.projects[0].year}</span>
                    <span class="text-gray-500 text-xl">${User.projects[0].shortdescription}</span>
                </div>
                <p class="my-4 text-[#142850] font-bold">${User.projects[0].skill}</p>
                <p>${User.projects[0].description}</p>
            </div>
        </div>

        <div class="grid md:grid-cols-[246px,auto] gap-8 border-b py-8">
            <div>
                <img class="w-full" src="${User.projects[1].img}" alt="">
            </div>
            <div class="my-auto">
                <h3 class="font-bold text-3xl"><a href="./Workdetail.html?id=${User.projects[1].id}">${User.projects[1].name}</a></h3>
                <div class="space-x-8 my-6">
                    <span class="rounded-2xl bg-[#142850] text-white text-lg font-black py-1 px-3">${User.projects[1].year}</span>
                    <span class="text-gray-500 text-xl">${User.projects[1].shortdescription}</span>
                </div>
                <p class="my-4 text-[#142850] font-bold">${User.projects[1].skill}</p>
                <p>${User.projects[1].description}</p>
            </div>
        </div>

        <div class="grid md:grid-cols-[246px,auto] gap-8 border-b py-8">
            <div>
                <img class="w-full" src="${User.projects[2].img}" alt="">
            </div>
            <div class="my-auto">
                <h3 class="font-bold text-3xl"><a href="./Workdetail.html?id=${User.projects[2].id}">${User.projects[2].name}</a></h3>
                <div class="space-x-8 my-6">
                    <span class="rounded-2xl bg-[#142850] text-white text-lg font-black py-1 px-3">${User.projects[2].year}</span>
                    <span class="text-gray-500 text-xl">${User.projects[2].shortdescription}</span>
                </div>
                <p class="my-4 text-[#142850] font-bold">${User.projects[2].skill}</p>
                <p>${User.projects[2].description}</p>
            </div>
        </div>
    </section>

    ${Footer()}
    
</div>
    `}).join("");
    app.innerHTML = products;
})
};

export default HomePage;
