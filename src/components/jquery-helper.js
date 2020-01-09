import React, { Component } from "react"
import { Helmet } from "react-helmet"
import $ from "jquery"

class JsHelper extends Component {

    componentWillUnmount() {
        clearInterval(this.intervalID)
      }
    
      componentDidMount() {

        $(document).ready(function($) {
            // Menu Toogle

            $('.hamburger').on('click', function(e) {
                e.preventDefault();
                $(this).toggleClass('is-active');
                $(this).siblings('nav').toggleClass('is-hidden');
                $('body').toggleClass('body-hidden');
            });

            // Next Section

            $(".next-module").click(function (e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: $(".next-module-box").offset().top
                }, 500);
            });

            // Video Popup

            $(".video-link.mp4").click(function(event) {
                event.preventDefault();
                $(document).bind("mousewheel DOMMouseScroll", function(event) {
                    event.preventDefault()
                });
                $(document).bind("touchmove", function(event) {
                    event.preventDefault()
                });
                var video_url = $(this).children('.data-video').html();
                $('.video-light-box').find('.play-iframe-video').append('<video controls="controls"><source src="' + video_url +
                    '" type="video/mp4"></video>');
                $('.video-light-box').fadeIn(300);
            });
            $(".video-link.video").click(function(event) {
                event.preventDefault();
                $(document).bind("mousewheel DOMMouseScroll", function(event) {
                    event.preventDefault()
                });
                $(document).bind("touchmove", function(event) {
                    event.preventDefault()
                });
                var video_url = $(this).find('.data-video').html();
                $('.video-light-box').find('.play-iframe-video').append('<video controls="controls"><source src="' + video_url +
                    '" type="video/mp4"></video>');
                $('.video-light-box').fadeIn(300);
            });
            $(".video-link.embed").click(function(event) {
                event.preventDefault();
                $(document).bind("mousewheel DOMMouseScroll", function(event) {
                    event.preventDefault()
                });
                $(document).bind("touchmove", function(event) {
                    event.preventDefault()
                });
                $('.video-light-box').fadeIn(300);
                var html = $(this).find('.data-video').html();
                $('.video-light-box').find('.play-iframe-video').html(html);
            });
            $('.video-light-box .close').click(function() {
                $(document).unbind("mousewheel DOMMouseScroll");
                $(document).unbind("touchmove");
                $('.video-light-box').fadeOut(300);
                setTimeout(function() {
                    $('.video-light-box').find('.play-iframe-video').html('');
                }, 300);
            });
            $('.video-light-box').click(function() {
                $(document).unbind("mousewheel DOMMouseScroll");
                $(document).unbind("touchmove");
                $('.video-light-box').fadeOut(300);
                setTimeout(function() {
                    $('.video-light-box').find('.play-iframe-video').html('');
                }, 300);
            });
            $('.video-light-box .box').click(function(event) {
                event.stopPropagation();
            });
        });
    }
    

    render() {
        return (
            <Helmet>
                <script
                    src="https://assets.calendly.com/assets/external/widget.js"
                    type="text/javascript"
                />               
            </Helmet>
        )
    }
}

export default JsHelper
