<h2> Problem Solving </h2>

### Question 1

There is no tex file in the exported zip file.

Solution: See the second point of [Spine Animation convert to Ds Animation](/en/spine/export-import#spine-animation-convert-to-ds-animation).

### Question 2

After the Don't Starve animation is converted to a spine file, some images are deformed incorrectly.

Cause of the error: Transformation calculation is irreversible and can only be simulated. Complex animations contain multiple transformations, and simulation calculations are inaccurate.

Solution: It cannot be solved and needs to be manually adjusted.

### Question 3

Importing the Json file, cannot see any image in spine editor.

Cause of error: No skin selected, no pose exported, or wrong image path.

Solution: Select the skin. If no pose is exported, you need to switch to the animation editing interface. If there is still no image, check the image path.
