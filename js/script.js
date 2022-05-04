const app= new Vue({
    el: "#app",

    data:{
        slides:[
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
        counterPic:0,
        isActive: false,
        activeClass: "active",
    },

    methods:{
        prevPic(){
            this.counterPic++;
            if (this.counterPic>this.slides.length-1) {
                this.counterPic=0;
            };
            console.log(this.counterPic);
        },

        nextPic(){
            this.counterPic--;
            if (this.counterPic<0) {
                this.counterPic=this.slides.length-1;
            };
            console.log(this.counterPic);
        },

        /*activeSlide(){
            for(this.slide, key of this.slides) {
                if (this.counterPic===this.slides[key]) {
                    this.isActive===true
                    console.log(this.slides[key]);
                }
            }

        }*/
    }
})

