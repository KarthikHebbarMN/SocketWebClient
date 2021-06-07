import {
  Timeline,
  //   Container,
  //   YearContent,
  BodyContent,
  Section,
  Description,
} from "vertical-timeline-component-react";

const Userflow = () => {
  const customTheme = {
    lineColor: "#d0cdc4",
    dotColor: "#262626",
    borderDotColor: "#d0cdc4",
    titleColor: "#405b73",
    subtitleColor: "#bf9765",
    textColor: "#262626",
  };

  return (
    <Timeline theme={customTheme} dateFormat='ll'>
      {/* <Container>
        <YearContent startDate='' currentYear /> */}
      <BodyContent>
        <Section title='Finished'>
          {/* <Description variant='subtitle' text='Subtitle' /> */}
          <Description text='This Description' />
          {/* <Description text='Another description' /> */}
        </Section>

        <Section title='Finished'>
          <Description text='This Description' />
        </Section>
        <Section title='In Progress'>
          <Description text='This Description' />
        </Section>
        <Section title='Waiting'>
          <Description text='This Description' />
        </Section>
        <Section title='Waiting'>
          <Description text='This Description' />
        </Section>
      </BodyContent>
      {/* </Container> */}
    </Timeline>
  );
};

export default Userflow;
