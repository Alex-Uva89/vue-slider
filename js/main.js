const app = new Vue({
	el: '#root',
	data: {
        activeIndex: 0,
        arrSlides: [
            {
                title:'Svezia',
                image:'img/01.jpg',
                txt:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                title:'Svizzera',
                image:'img/02.jpg',
                txt:'Lorem ipsum',
            },
            {
                title:'Gran Bretagna',
                image:'img/03.jpg',
                txt:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                title:'Germania',
                image:'img/04.jpg',
                txt:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                title:'Paradice',
                image:'img/05.jpg',
                txt:'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        ], 
    intervalSlide:'',
    },
    methods: {
        next(){
            if(this.activeIndex == this.arrSlides.length - 1){
                this.activeIndex = 0;
            } else {
                this.activeIndex++;
            }
        },
        previous(){
            if(this.activeIndex == 0){
                this.activeIndex = this.arrSlides.length - 1;
            } else {
                this.activeIndex--;
            }
        },
        stopInterval(){
            clearInterval(this.intervalSlide);
        },
        startInterval(){
            this.intervalSlide = setInterval(this.next, 2000);
        },
    },
    created(){
        this.startInterval();
    }
		
});

