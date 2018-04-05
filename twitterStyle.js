jQuery('.twitter-block').delegate('#twitter-widget-0','DOMSubtreeModified propertychange', function() {
					//function call to override the base twitter styles
					customizeTweetMedia();
					});

					var customizeTweetMedia = function() {

					//overrides font styles and removes the profile picture and media from twitter feed
					jQuery('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet-media').css('display', 'none');
					// jQuery('.twitter-block').find('.twitter-timeline').contents().find('.timeline-TweetList').css('margin-top', '-16px');

					
					jQuery('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet-metadata').css('margin-top', '-2px');
					jQuery('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet').css('padding', '16px 8px 16px 0px');
					jQuery('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet').css('border-bottom', '1px solid #E1E1E1');
					jQuery('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet-retweetCredit').css('margin-left', '0px');
					jQuery('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet-text').css('margin-left', '0px');
					jQuery('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet-actions').css('margin-left', '0px');
					jQuery('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet-Author').css('padding', '0px');
					jQuery('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet-text').css('font-family', 'roboto');
					jQuery('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet-text').css('font-family', 'roboto');
					jQuery('.twitter-block').find('.twitter-timeline').contents().find('.dt-updated').css('font-family', 'roboto');
					jQuery('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet-text').css('font-weight', '300');
					jQuery('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet-text').css('font-size', '13px');
					jQuery('.twitter-block').find('.twitter-timeline').contents().find('img.Avatar').remove();
					jQuery('.twitter-block').find('.twitter-timeline').contents().find('.Icon--twitter').remove();
					jQuery('.twitter-block').find('.twitter-timeline').contents().find('span.TweetAuthor-avatar.Identity-avatar').remove();
					jQuery('.twitter-block').find('.twitter-timeline').contents().find('span.TweetAuthor-screenName').css('font-size', '10px');
					jQuery('.twitter-block').find('.twitter-timeline').contents().find('span.TweetAuthor-screenName').css('font-family', 'Roboto');
					
					//also call the function on dynamic updates in addition to page load
					jQuery('.twitter-block').find('.twitter-timeline').contents().find('.timeline-TweetList').bind('DOMSubtreeModified propertychange', function() {
					customizeTweetMedia(this);
					});
					}