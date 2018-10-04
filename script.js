class VKSW {
  constructor(_config = {}) {
    const config = Object.assign({
      own: true,
      timeout: 100,
      actions: [
        VKSW.actions.comment,
        VKSW.actions.like
      ]
    }, _config);

    const selector = '#page_wall_posts div' + (config.own ? '.own' : '') + ':not(.post_fixed)';
    var last_id = document.querySelector(selector).id;

    function loop() {
      var post = document.querySelector(selector);
      if (post.id !== last_id) {
        last_id = post.id;
        config.actions.forEach((action) => {
          action(post);
        });
      }
    }
    this.intervalId = setInterval(loop, config.timeout);
    console.log('[VKSW] Started. Interval id:',this.intervalId);
  }
  stop() {
    clearInterval(this.intervalId);
    console.log('[VKSW] Stopped. Interval id:',this.intervalId);
  }
}
VKSW.actions = {
  like: (post) => {
    post.querySelector('.like_button_icon').click();
  },
  comment: (post) => {
    Wall.showEditReply(post.id.substr(4), new Event('focus'));
    post.querySelector('.reply_field.submit_post_field').innerText = 'a';
    post.querySelector('.flat_button.addpost_button').click();
  }
};
VKSW.storage = {};
