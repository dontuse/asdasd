/*
 $(function(){
 $('.b-jobs__hide-zone').hide();
 $('.b-jobs__item').on('click','.b-jobs__head-a', function(e){
 e.preventDefault();
 $(e.delegateTarget).find('.b-jobs__hide-zone').slideToggle(300);
 });
 });
 */


BEM.DOM.decl('b-jobs', {

    onSetMod:{
        js:function () {
            console.log('on set mod JS ', this);
            this.findElem('hide-zone').hide();

            // кеширующий
            console.log('this.elem(head-a)',this.elem('head-a'));
            // не кеширующий
            var elem = this.findElem('head-a');

            this.bindTo('item', 'click', this.close);

            this.elem('item').on('click','.b-jobs__head-a', function(e) {
                e.preventDefault();
                $(e.delegateTarget).find('.b-jobs__hide-zone').slideToggle(300);
            });

        },
        'mod_kva':function() {
            this.elem('item').on('click','.b-jobs__head-a', function(e) {
                e.preventDefault();
                $(e.delegateTarget).find('.b-jobs__hide-zone').slideToggle(300);
                alert('kva vka');
            });
        }
    },

    close: function(e){
        console.log(this);


    }


}, {


});