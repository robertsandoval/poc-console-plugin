import * as React from 'react';
import Helmet from 'react-helmet';
import {
  Card,
  CardHeader,
  CardActions,
  CardTitle,
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownSeparator,
  KebabToggle,
  Page,
  PageSection,
  Text,
  TextContent,
  Title,
} from '@patternfly/react-core';
import './example.css';

export default function PocPage() {
  const [selected, setSelected] = React.useState<string>('');
  const [isKebabOpen, setIsKebabOpen] = React.useState<boolean>(false);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if ([' ', 'Enter'].includes(event.key)) {
      event.preventDefault();
      const newSelected = event.currentTarget.id === selected ? null : event.currentTarget.id;
      setSelected(newSelected);
    }
  };

  const onClick = (event: React.MouseEvent) => {
    const newSelected = event.currentTarget.id === selected ? null : event.currentTarget.id;
    setSelected(newSelected);
  };

  const onChange = (labelledById: string, _event: React.FormEvent<HTMLInputElement>) => {
    const newSelected = labelledById === selected ? null : labelledById;
    setSelected(newSelected);
  };

  const onToggle = (
      isOpen: boolean,
      event: MouseEvent | TouchEvent | KeyboardEvent | React.KeyboardEvent<any> | React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setIsKebabOpen(isOpen);
  };

  const onSelect = (event: React.SyntheticEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsKebabOpen(false);
  };

  const dropdownItems = [
    <DropdownItem key="link">Link</DropdownItem>,
    <DropdownItem key="action" component="button">
      Action
    </DropdownItem>,
    <DropdownItem key="disabled link" isDisabled>
      Disabled Link
    </DropdownItem>,
    <DropdownItem key="disabled action" isDisabled component="button">
      Disabled Action
    </DropdownItem>,
    <DropdownSeparator key="separator" />,
    <DropdownItem key="separated link">Separated Link</DropdownItem>,
    <DropdownItem key="separated action" component="button">
      Separated Action
    </DropdownItem>
  ];







  return (
    <>
      <Helmet>
        <title>POC Status</title>
      </Helmet>
      <Page>
        <PageSection variant="light">
          <Title headingLevel="h1">POC Status for </Title>
        </PageSection>
        <PageSection variant="light">
          <TextContent>
            <Text component="p">
              <span className="console-plugin-template__nice">Nice!</span> Your
              plugin is working.
            </Text>
          </TextContent>
          <Card
            id="selectable-first-card"
            onKeyDown={onKeyDown}
            onClick={onClick}
            hasSelectableInput
            onSelectableInputChange={onChange}
            isSelectableRaised
            isSelected={selected === 'selectable-first-card'}
          >
          <CardHeader>
            <CardActions>
              <Dropdown
                  onSelect={onSelect}
                  toggle={<KebabToggle onToggle={onToggle} />}
                  isOpen={isKebabOpen}
                  isPlain
                  dropdownItems={dropdownItems}
                  position={'right'}
              />
            </CardActions>
          </CardHeader>
          <CardTitle>Use Case 1</CardTitle>
          <CardBody>Deploy Sample Application</CardBody>
        </Card>
          <br />
          <Card
              id="selectable-second-card"
              onKeyDown={onKeyDown}
              onClick={onClick}
              hasSelectableInput
              onSelectableInputChange={onChange}
              isSelectableRaised
              isSelected={selected === 'selectable-second-card'}
          >
            <CardTitle>Second card</CardTitle>
            <CardBody>This is a selectable card. Click me to select me. Click again to deselect me.</CardBody>
          </Card>
          <br />
          <Card id="selectable-third-card" isSelectableRaised isDisabledRaised hasSelectableInput>
            <CardTitle>Third card</CardTitle>
            <CardBody>This is a raised but disabled card.</CardBody>
          </Card>

        </PageSection>
      </Page>
    </>
  );
}
