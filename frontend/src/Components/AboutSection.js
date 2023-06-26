import React from 'react'
import './AboutSection.css'

const AboutSection = ({handleLeaveAbout}) => {

  return (
		<div className="about-container" onMouseLeave={handleLeaveAbout}>
			<div className="about-text-container">
				<p>
					Leo integer malesuada nunc vel risus commodo. Quam viverra orci
					sagittis eu volutpat. Duis ultricies lacus sed turpis tincidunt. Amet
					massa vitae tortor condimentum lacinia. Pretium quam vulputate
					dignissim suspendisse in est. Ullamcorper a lacus vestibulum sed arcu.
					Vitae justo eget magna fermentum iaculis eu non diam. Risus nullam
					eget felis eget nunc lobortis mattis aliquam. Ipsum nunc aliquet
					bibendum enim facilisis gravida neque.
				</p>
				<br />
				<p>
					Dictum varius duis at consectetur lorem donec massa. Felis bibendum ut
					tristique et egestas quis ipsum suspendisse. Volutpat consequat mauris
					nunc congue nisi vitae suscipit. Risus feugiat in ante metus dictum at
					tempor. Fermentum posuere urna nec tincidunt praesent semper feugiat.
					Non consectetur a erat nam at lectus urna. Volutpat commodo sed
					egestas egestas. Posuere morbi leo urna molestie at elementum eu.
					Tincidunt dui ut ornare lectus. Nunc mi ipsum faucibus vitae. Neque
					aliquam vestibulum morbi blandit cursus risus at. Amet nisl suscipit
					adipiscing bibendum est ultricies. Sed augue lacus viverra vitae
					congue. Ultrices tincidunt arcu non sodales. Tincidunt ornare massa
					eget egestas. At augue eget arcu dictum varius. Viverra aliquet eget
					sit amet tellus cras adipiscing enim. Varius sit amet mattis vulputate
					enim nulla aliquet. In dictum non consectetur a erat nam at lectus.
					Elementum nisi quis eleifend quam adipiscing vitae proin. Dui sapien
					eget mi proin sed libero enim sed faucibus. Pharetra massa massa
					ultricies mi quis hendrerit. Semper viverra nam libero justo laoreet
					sit amet. Pellentesque massa placerat duis ultricies.
				</p>
			</div>
		</div>
	);
}

export default AboutSection