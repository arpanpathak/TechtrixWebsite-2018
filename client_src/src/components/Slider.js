import React, { Component } from 'react';
import $ from 'jquery';
import '../assets/css/Slider.css';

class Slider extends Component {
  componentDidMount() {
    this.initSlider();
    this.prevBtn.on('click', this.prev);
    this.nextBtn.on('click', this.next);
    $(window).resize(() => {
      this.sliderContainer.css('width', (this.numOfSlides*100)+'%');
    });
  }

  initSlider() {
    this.slider = $('#'+this.props.children.props['id']);
    this.sliderContainer = this.slider.find('.slides');
    this.slides = this.sliderContainer.find('.slide');
    this.prevBtn = this.sliderContainer.find('#prevSlide');
    this.nextBtn = this.sliderContainer.find('#nextSlide');
    this.slideIndex = 1;
    this.numOfSlides = this.slides.length;
    this.animationSpeed = 1000;
    this.sliderContainer.css('width', (this.numOfSlides*100)+'%');
    this.prevBtn.hide();
  }

  prev = (e) => {
    $(this).off(e);
    if (this.slideIndex > 1) {
      let slideWidth = this.slides[0].clientWidth;
      if (this.slideIndex === 2) {
        this.prevBtn.hide();
      }
      this.sliderContainer.animate({'margin-left': '+='+slideWidth}, this.animationSpeed, () => {
        this.slideIndex--;
        this.nextBtn.show();
      });
    }
    setTimeout(() => {
      this.prevBtn.on('click', this.prev);
    }, this.animationSpeed);
  }

  next = (e) => {
    $(this).off(e);
    if (this.slideIndex < this.numOfSlides) {
      let slideWidth = this.slides[0].clientWidth;
      if (this.slideIndex === this.numOfSlides-1) {
        this.nextBtn.hide();
      }
      this.sliderContainer.animate({'margin-left': '-='+slideWidth}, this.animationSpeed, () => {
        this.slideIndex++;
        this.prevBtn.show();
      });
    }
    setTimeout(() => {
      this.nextBtn.on('click', this.next);
    }, this.animationSpeed);
  }

  render() {
    return(
      <div className='Slider'>
        {this.props.children}
      </div>
    )
  }
}

export default Slider;
