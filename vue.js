Vue.use(VueViewer.default);
const app = new Vue({
  el: "#app",
  data: function () {
    return {
      albums: [
        {
          title: "Title here",
          images: [
            "https://i.imgur.com/FSAmR5S.jpg",
            "https://i.imgur.com/jZOTdRt.jpg",
          ],
        },
        {
          title: "Title here",
          images: ["https://i.imgur.com/csXyo1j.jpg"],
        },
        {
          title: "Title here",
          images: ["https://i.imgur.com/R4I97lq.jpg"],
        },
      ],
    };
  },
  methods: {
    show(index) {
      const viewer = this.$el.querySelector(`.album-${index}`).$viewer;
      viewer.show();
    },
  },
});
