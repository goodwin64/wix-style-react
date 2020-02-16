/* eslint-disable */
/* tslint:disable */
import {BaseUniDriver} from 'wix-ui-test-utils/base-driver';
import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import {AccordionUniDriver} from '../src/Accordion/Accordion.uni.driver';
import {AddItemDriver} from '../src/AddItem/AddItem.driver';
import {AutoCompleteDriver} from '../src/AutoComplete/AutoComplete.driver';
import {AutoCompleteWithLabelUniDriver} from '../src/AutoCompleteWithLabel/AutoCompleteWithLabel.uni.driver';
import AvatarUniDriver from '../src/Avatar/Avatar.uni.driver';
import {BadgeDriver} from '../src/Badge/Badge.driver';
import {BadgeSelectDriver} from '../src/BadgeSelect/BadgeSelect.driver';
import {BarChartUniDriver} from '../src/BarChart/BarChart.uni.driver';
import {BoxUniDriver} from '../src/Box/Box.uni.driver';
import {BreadcrumbsDriver} from '../src/Breadcrumbs/Breadcrumbs.driver';
import {BrowserPreviewWidgetUniDriver} from '../src/BrowserPreviewWidget/BrowserPreviewWidget.uni.driver';
import {ButtonUniDriver} from '../src/Button/Button.uni.driver';
import {CalendarDriver} from '../src/Calendar/Calendar.driver';
import {CalendarPanelUniDriver} from '../src/CalendarPanel/CalendarPanel.uni.driver';
import {CalendarPanelFooterUniDriver} from '../src/CalendarPanelFooter/CalendarPanelFooter.uni.driver';
import {HeaderDriver} from '../src/Card/Header/Header.driver';
import {SubheaderUniDriver} from '../src/Card/Subheader/Subheader.uni.driver';
import {CardGalleryItemUniDriver} from '../src/CardGalleryItem/CardGalleryItem.uni.driver';
import {CarouselDriver} from '../src/Carousel/Carousel.driver';
import {CheckboxDriver} from '../src/Checkbox/Checkbox.driver';
import {CircularProgressBarDriver} from '../src/CircularProgressBar/CircularProgressBar.driver';
import {CloseButtonUniDriver} from '../src/CloseButton/CloseButton.uni.driver';
import {ColorInputUniDriver} from '../src/ColorInput/ColorInput.uni.driver';
import {ColorPickerDriver} from '../src/ColorPicker/ColorPicker.driver';
import {ComposerHeaderUniDriver} from '../src/ComposerHeader/ComposerHeader.uni.driver';
import {ContactItemBuilderDriver} from '../src/ContactItemBuilder/ContactItemBuilder.driver';
import {CounterBadgeDriver} from '../src/CounterBadge/CounterBadge.driver';
import {CustomModalUniDriver} from '../src/CustomModal/CustomModal.uni.driver';
import {DataTableDriver} from '../src/DataTable/DataTable.driver';
import {DateInputUniDriver} from '../src/DateInput/DateInput.uni.driver';
import {DatePickerDriver} from '../src/DatePicker/DatePicker.driver';
import {DividerUniDriver} from '../src/Divider/Divider.uni.driver';
import {DropdownDriver} from '../src/Dropdown/Dropdown.driver';
import {DropdownBaseUniDriver} from '../src/DropdownBase/DropdownBase.uni.driver';
import {DropdownLayoutDriver} from '../src/DropdownLayout/DropdownLayout.driver';
import {EditableRowDriver} from '../src/EditableSelector/EditableRow/EditableRow.driver';
import {EditableSelectorDriver} from '../src/EditableSelector/EditableSelector.driver';
import {EditableTitleUniDriver} from '../src/EditableTitle/EditableTitle.uni.driver';
import {EmptyStateDriver} from '../src/EmptyState/EmptyState.driver';
import {ErrorIndicatorUniDriver} from '../src/ErrorIndicator/ErrorIndicator.uni.driver';
import {FilePickerDriver} from '../src/FilePicker/FilePicker.driver';
import {FillButtonUniDriver} from '../src/FillButton/FillButton.uni.driver';
import {FillPreviewUniDriver} from '../src/FillPreview/FillPreview.uni.driver';
import {FloatingHelperDriver} from '../src/FloatingHelper/FloatingHelper.driver';
import {FloatingNotificationUniDriver} from '../src/FloatingNotification/FloatingNotification.uni.driver';
import {FontUpgradeUniDriver} from '../src/FontUpgrade/FontUpgrade.uni.driver';
import {FormFieldDriver} from '../src/FormField/FormField.driver';
import {GenericModalLayoutDriver} from '../src/GenericModalLayout/GenericModalLayout.driver';
import {GooglePreviewUniDriver} from '../src/GooglePreview/GooglePreview.uni.driver';
import {HeadingDriver} from '../src/Heading/Heading.driver';
import {HighlighterDriver} from '../src/Highlighter/Highlighter.driver';
import {IconButtonUniDriver} from '../src/IconButton/IconButton.uni.driver';
import {ImageUniDriver} from '../src/Image/Image.uni.driver';
import {ImageViewerDriver} from '../src/ImageViewer/ImageViewer.driver';
import {InfoIconUniDriver} from '../src/InfoIcon/InfoIcon.uni.driver';
import {InputDriver} from '../src/Input/Input.driver';
import {InputAreaDriver} from '../src/InputArea/InputArea.driver';
import {InputWithLabelUniDriver} from '../src/InputWithLabel/InputWithLabel.uni.driver';
import {InputWithOptionsDriver} from '../src/InputWithOptions/InputWithOptions.driver';
import {LabelDriver} from '../src/Label/Label.driver';
import {LabelledElementUniDriver} from '../src/LabelledElement/LabelledElement.uni.driver';
import {LinearProgressBarDriver} from '../src/LinearProgressBar/LinearProgressBar.driver';
import {ListItemActionUniDriver} from '../src/ListItemAction/ListItemAction.uni.driver';
import {ListItemSectionUniDriver} from '../src/ListItemSection/ListItemSection.uni.driver';
import {ListItemSelectUniDriver} from '../src/ListItemSelect/ListItemSelect.uni.driver';
import {LoaderDriver} from '../src/Loader/Loader.driver';
import {MarketingLayoutUniDriver} from '../src/MarketingLayout/MarketingLayout.uni.driver';
import {MediaOverlayUniDriver} from '../src/MediaOverlay/MediaOverlay.uni.driver';
import {MessageBoxFunctionalLayoutDriver} from '../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.driver';
import {MessageBoxMarketerialLayoutDriver} from '../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.driver';
import {MobilePreviewWidgetUniDriver} from '../src/MobilePreviewWidget/MobilePreviewWidget.uni.driver';
import {ModalDriver} from '../src/Modal/Modal.driver';
import {ModalMobileLayoutUniDriver} from '../src/ModalMobileLayout/ModalMobileLayout.uni.driver';
import {ModalPreviewLayoutUniDriver} from '../src/ModalPreviewLayout/ModalPreviewLayout.uni.driver';
import {ModalSelectorLayoutDriver} from '../src/ModalSelectorLayout/ModalSelectorLayout.driver';
import {MultiSelectDriver} from '../src/MultiSelect/MultiSelect.driver';
import {MultiSelectCheckboxDriver} from '../src/MultiSelectCheckbox/MultiSelectCheckbox.driver';
import {NestableListDriver} from '../src/NestableList/NestableList.driver';
import {NoBorderInputDriver} from '../src/NoBorderInput/NoBorderInput.driver';
import {NotificationDriver} from '../src/Notification/Notification.driver';
import {NumberInputUniDriver} from '../src/NumberInput/NumberInput.uni.driver';
import {PageDriver} from '../src/Page/Page.driver';
import {PageHeaderDriver} from '../src/PageHeader/PageHeader.driver';
import {PaletteUniDriver} from '../src/Palette/Palette.uni.driver';
import {PopoverDriver} from '../src/Popover/Popover.driver';
import {PopoverMenuDriver} from '../src/PopoverMenu/PopoverMenu.driver';
import {PreviewWidgetUniDriver} from '../src/PreviewWidget/PreviewWidget.uni.driver';
import {ProportionUniDriver} from '../src/Proportion/Proportion.uni.driver';
import {RadioButtonDriver} from '../src/RadioGroup/RadioButton/RadioButton.driver';
import {RadioGroupDriver} from '../src/RadioGroup/RadioGroup.driver';
import {RangeDriver} from '../src/Range/Range.driver';
import {RichTextInputAreaUniDriver} from '../src/RichTextInputArea/RichTextInputArea.uni.driver';
import {SearchDriver} from '../src/Search/Search.driver';
import {SectionHelperDriver} from '../src/SectionHelper/SectionHelper.driver';
import {SegmentedToggleUniDriver} from '../src/SegmentedToggle/SegmentedToggle.uni.driver';
import {SelectorDriver} from '../src/Selector/Selector.driver';
import {SidebarUniDriver} from '../src/Sidebar/Sidebar.uni.driver';
import {SidebarBackButtonUniDriver} from '../src/SidebarBackButton/SidebarBackButton.uni.driver';
import {SidebarDividerUniDriver} from '../src/SidebarDivider/SidebarDivider.uni.driver';
import {SidebarHeaderUniDriver} from '../src/SidebarHeader/SidebarHeader.uni.driver';
import {SidebarSectionItemUniDriver} from '../src/SidebarSectionItem/SidebarSectionItem.uni.driver';
import {SidebarSectionTitleUniDriver} from '../src/SidebarSectionTitle/SidebarSectionTitle.uni.driver';
import {SidePanelUniDriver} from '../src/SidePanel/SidePanel.uni.driver';
import {SkeletonDriver} from '../src/Skeleton/Skeleton.driver';
import {SliderDriver} from '../src/Slider/Slider.driver';
import {SocialButtonUniDriver} from '../src/SocialButton/SocialButton.uni.driver';
import {SocialPreviewUniDriver} from '../src/SocialPreview/SocialPreview.uni.driver';
import {SortableListDriver} from '../src/SortableList/SortableList.driver';
import {StatisticsWidgetUniDriver} from '../src/StatisticsWidget/StatisticsWidget.uni.driver';
import {StatusIndicatorUniDriver} from '../src/StatusIndicator/StatusIndicator.uni.driver';
import {StepperUniDriver} from '../src/Stepper/Stepper.uni.driver';
import {SwatchesUniDriver} from '../src/Swatches/Swatches.uni.driver';
import {TableDriver} from '../src/Table/Table.driver';
import {TableActionCellDriver} from '../src/TableActionCell/TableActionCell.driver';
import {TabsDriver} from '../src/Tabs/Tabs.driver';
import {TagDriver} from '../src/Tag/Tag.driver';
import {TextDriver} from '../src/Text/Text.driver';
import {TextButtonUniDriver} from '../src/TextButton/TextButton.uni.driver';
import {ThumbnailUniDriver} from '../src/Thumbnail/Thumbnail.uni.driver';
import {TimeInputDriver} from '../src/TimeInput/TimeInput.driver';
import {TimeTableUniDriver} from '../src/TimeTable/TimeTable.uni.driver';
import {ToggleButtonUniDriver} from '../src/ToggleButton/ToggleButton.uni.driver';
import {ToggleSwitchDriver} from '../src/ToggleSwitch/ToggleSwitch.driver';
import {TooltipDriver} from '../src/Tooltip/Tooltip.driver';
import {TooltipUniDriver} from '../src/Tooltip/TooltipNext/Tooltip.uni.driver';
import {VariableInputUniDriver} from '../src/VariableInput/VariableInput.uni.driver';
import {VerticalTabsUniDriver} from '../src/VerticalTabs/VerticalTabs.uni.driver';
import {VerticalTabsItemUniDriver} from '../src/VerticalTabsItem/VerticalTabsItem.uni.driver';
import {WarningIndicatorUniDriver} from '../src/WarningIndicator/WarningIndicator.uni.driver';

type VanillaTestkitFactory<T extends BaseDriver> = (
  params: VanillaTeskitParams
) => T;

type VanillaUniTestkitFactory<T extends BaseUniDriver> = (
  params: VanillaTeskitParams
) => T;

interface VanillaTeskitParams {
  wrapper: HTMLElement;
  dataHook: string;
}

type DeprecatedVanillaTestkit = any;

export const accordionTestkitFactory: VanillaUniTestkitFactory<AccordionUniDriver>;
export const addItemTestkitFactory: VanillaTestkitFactory<AddItemDriver<HTMLElement>>;
export const autoCompleteTestkitFactory: VanillaTestkitFactory<AutoCompleteDriver>;
export const autoCompleteCompositeTestkitFactory: DeprecatedVanillaTestkit;
export const avatarTestkitFactory: VanillaUniTestkitFactory<AvatarUniDriver>;
export const badgeTestkitFactory: VanillaTestkitFactory<BadgeDriver>;
export const badgeSelectTestkitFactory: VanillaTestkitFactory<BadgeSelectDriver>;
export const boxTestkitFactory: VanillaUniTestkitFactory<BoxUniDriver>;
export const breadcrumbsTestkitFactory: VanillaTestkitFactory<BreadcrumbsDriver>;
export const buttonTestkitFactory: VanillaUniTestkitFactory<ButtonUniDriver>;
export const calendarTestkitFactory: VanillaTestkitFactory<CalendarDriver>;
export const calendarPanelTestkitFactory: VanillaUniTestkitFactory<CalendarPanelUniDriver>;
export const calendarPanelFooterTestkitFactory: VanillaUniTestkitFactory<CalendarPanelFooterUniDriver>;
export const cardGalleryItemTestkitFactory: VanillaUniTestkitFactory<CardGalleryItemUniDriver>;
export const carouselTestkitFactory: VanillaTestkitFactory<CarouselDriver>;
export const checkboxTestkitFactory: VanillaTestkitFactory<CheckboxDriver>;
export const circularProgressBarTestkitFactory: VanillaTestkitFactory<CircularProgressBarDriver>;
export const closeButtonTestkitFactory: VanillaUniTestkitFactory<CloseButtonUniDriver>;
export const colorInputTestkitFactory: VanillaUniTestkitFactory<ColorInputUniDriver>;
export const colorPickerTestkitFactory: VanillaTestkitFactory<ColorPickerDriver>;
export const contactItemBuilderTestkitFactory: VanillaTestkitFactory<ContactItemBuilderDriver>;
export const counterBadgeTestkitFactory: VanillaTestkitFactory<CounterBadgeDriver>;
export const dataTableTestkitFactory: VanillaTestkitFactory<DataTableDriver>;
export const dateInputTestkitFactory: VanillaUniTestkitFactory<DateInputUniDriver>;
export const datePickerTestkitFactory: VanillaTestkitFactory<DatePickerDriver>;
export const dropdownTestkitFactory: VanillaTestkitFactory<DropdownDriver>;
export const dropdownBaseTestkitFactory: VanillaUniTestkitFactory<DropdownBaseUniDriver>;
export const dropdownLayoutTestkitFactory: VanillaTestkitFactory<DropdownLayoutDriver>;
export const editableSelectorTestkitFactory: VanillaTestkitFactory<EditableSelectorDriver>;
export const editableTitleTestkitFactory: VanillaUniTestkitFactory<EditableTitleUniDriver>;
export const emptyStateTestkitFactory: VanillaTestkitFactory<EmptyStateDriver>;
export const errorIndicatorTestkitFactory: VanillaUniTestkitFactory<ErrorIndicatorUniDriver>;
export const filePickerTestkitFactory: VanillaTestkitFactory<FilePickerDriver>;
export const floatingHelperTestkitFactory: VanillaTestkitFactory<FloatingHelperDriver>;
export const floatingNotificationTestkitFactory: VanillaUniTestkitFactory<FloatingNotificationUniDriver>;
export const formFieldTestkitFactory: VanillaTestkitFactory<FormFieldDriver>;
export const genericModalLayoutTestkitFactory: VanillaTestkitFactory<GenericModalLayoutDriver>;
export const googleAddressInputWithLabelTestkitFactory: DeprecatedVanillaTestkit;
export const googlePreviewTestkitFactory: VanillaUniTestkitFactory<GooglePreviewUniDriver>;
export const headingTestkitFactory: VanillaTestkitFactory<HeadingDriver>;
export const highlighterTestkitFactory: VanillaTestkitFactory<HighlighterDriver<HTMLElement>>;
export const iconButtonTestkitFactory: VanillaUniTestkitFactory<IconButtonUniDriver>;
export const toggleButtonTestkitFactory: VanillaUniTestkitFactory<ToggleButtonUniDriver>;
export const imageViewerTestkitFactory: VanillaTestkitFactory<ImageViewerDriver<HTMLElement>>;
export const inputTestkitFactory: VanillaTestkitFactory<InputDriver>;
export const inputAreaTestkitFactory: VanillaTestkitFactory<InputAreaDriver<HTMLElement>>;
export const inputWithOptionsTestkitFactory: VanillaTestkitFactory<InputWithOptionsDriver>;
export const labelTestkitFactory: VanillaTestkitFactory<LabelDriver>;
export const linearProgressBarTestkitFactory: VanillaTestkitFactory<LinearProgressBarDriver>;
export const listItemActionTestkitFactory: VanillaUniTestkitFactory<ListItemActionUniDriver>;
export const loaderTestkitFactory: VanillaTestkitFactory<LoaderDriver>;
export const modalTestkitFactory: VanillaTestkitFactory<ModalDriver<HTMLElement>>;
export const modalSelectorLayoutTestkitFactory: VanillaTestkitFactory<ModalSelectorLayoutDriver>;
export const multiSelectTestkitFactory: VanillaTestkitFactory<MultiSelectDriver>;
export const multiSelectCheckboxTestkitFactory: VanillaTestkitFactory<MultiSelectCheckboxDriver>;
export const multiSelectCompositeTestkitFactory: DeprecatedVanillaTestkit;
export const nestableListTestkitFactory: VanillaTestkitFactory<NestableListDriver>;
export const noBorderInputTestkitFactory: VanillaTestkitFactory<NoBorderInputDriver>;
export const notificationTestkitFactory: VanillaTestkitFactory<NotificationDriver>;
export const numberInputTestkitFactory: VanillaUniTestkitFactory<NumberInputUniDriver>;
export const pageTestkitFactory: VanillaTestkitFactory<PageDriver>;
export const pageHeaderTestkitFactory: VanillaTestkitFactory<PageHeaderDriver>;
export const popoverTestkitFactory: VanillaTestkitFactory<PopoverDriver>;
export const popoverMenuTestkitFactory: VanillaTestkitFactory<PopoverMenuDriver>;
export const proportionTestkitFactory: VanillaUniTestkitFactory<ProportionUniDriver>;
export const radioGroupTestkitFactory: VanillaTestkitFactory<RadioGroupDriver>;
export const rangeTestkitFactory: VanillaTestkitFactory<RangeDriver>;
export const richTextInputAreaTestkitFactory: VanillaUniTestkitFactory<RichTextInputAreaUniDriver>;
export const searchTestkitFactory: VanillaTestkitFactory<SearchDriver>;
export const sectionHelperTestkitFactory: VanillaTestkitFactory<SectionHelperDriver>;
export const segmentedToggleTestkitFactory: VanillaUniTestkitFactory<SegmentedToggleUniDriver>;
export const selectorTestkitFactory: VanillaTestkitFactory<SelectorDriver>;
export const sidebarTestkitFactory: VanillaUniTestkitFactory<SidebarUniDriver>;
export const sidebarSectionTitleTestkitFactory: VanillaUniTestkitFactory<SidebarSectionTitleUniDriver>;
export const skeletonTestkitFactory: VanillaTestkitFactory<SkeletonDriver>;
export const sliderTestkitFactory: VanillaTestkitFactory<SliderDriver>;
export const socialPreviewTestkitFactory: VanillaUniTestkitFactory<SocialPreviewUniDriver>;
export const sortableListTestkitFactory: VanillaTestkitFactory<SortableListDriver>;
export const statsWidgetTestkitFactory: DeprecatedVanillaTestkit;
export const stepperTestkitFactory: VanillaUniTestkitFactory<StepperUniDriver>;
export const swatchesTestkitFactory: VanillaUniTestkitFactory<SwatchesUniDriver>;
export const tableTestkitFactory: VanillaTestkitFactory<TableDriver<HTMLElement>>;
export const tableActionCellTestkitFactory:  VanillaTestkitFactory<TableActionCellDriver<HTMLElement>>;
export const tabsTestkitFactory: VanillaTestkitFactory<TabsDriver>;
export const tagTestkitFactory:  VanillaTestkitFactory<TagDriver>;
export const textTestkitFactory: VanillaTestkitFactory<TextDriver>;
export const textButtonTestkitFactory: VanillaUniTestkitFactory<TextButtonUniDriver>;
export const thumbnailTestkitFactory: VanillaUniTestkitFactory<ThumbnailUniDriver>;
export const timeInputTestkitFactory: VanillaTestkitFactory<TimeInputDriver>;
export const toggleSwitchTestkitFactory: VanillaTestkitFactory<ToggleSwitchDriver>;
export const sidebarSectionItemTestkitFactory: VanillaUniTestkitFactory<SidebarSectionItemUniDriver>;
export const sidebarDividerTestkitFactory: VanillaUniTestkitFactory<SidebarDividerUniDriver>;
export const sidebarBackButtonTestkitFactory: VanillaUniTestkitFactory<SidebarBackButtonUniDriver>;
export const sidebarHeaderTestkitFactory: VanillaUniTestkitFactory<SidebarHeaderUniDriver>;
export const modalPreviewLayoutTestkitFactory: VanillaUniTestkitFactory<ModalPreviewLayoutUniDriver>;
export const statisticsWidgetTestkitFactory: VanillaUniTestkitFactory<StatisticsWidgetUniDriver>;
export const composerHeaderTestkitFactory: VanillaUniTestkitFactory<ComposerHeaderUniDriver>;
export const fillPreviewTestkitFactory:  VanillaUniTestkitFactory<FillPreviewUniDriver>;
export const fillButtonTestkitFactory: VanillaUniTestkitFactory<FillButtonUniDriver>;
export const barChartTestkitFactory: VanillaUniTestkitFactory<BarChartUniDriver>;
export const inputWithLabelTestkitFactory: VanillaUniTestkitFactory<InputWithLabelUniDriver>;
export const autoCompleteWithLabelTestkitFactory: VanillaUniTestkitFactory<AutoCompleteWithLabelUniDriver>;
export const dividerTestkitFactory: VanillaUniTestkitFactory<DividerUniDriver>;
export const labelledElementTestkitFactory: VanillaUniTestkitFactory<LabelledElementUniDriver>;
export const previewWidgetTestkitFactory: VanillaUniTestkitFactory<PreviewWidgetUniDriver>;
export const modalMobileLayoutTestkitFactory: VanillaUniTestkitFactory<ModalMobileLayoutUniDriver>;
export const mediaOverlayTestkitFactory: VanillaUniTestkitFactory<MediaOverlayUniDriver<HTMLElement>>;
export const infoIconTestkitFactory: VanillaUniTestkitFactory<InfoIconUniDriver>;
export const socialButtonTestkitFactory: VanillaUniTestkitFactory<SocialButtonUniDriver>;
export const verticalTabsTestkitFactory: VanillaUniTestkitFactory<VerticalTabsUniDriver>;
export const verticalTabsItemTestkitFactory: VanillaUniTestkitFactory<VerticalTabsItemUniDriver>;
export const mobilePreviewWidgetTestkitFactory: VanillaUniTestkitFactory<MobilePreviewWidgetUniDriver>;
export const listItemSectionTestkitFactory: VanillaUniTestkitFactory<ListItemSectionUniDriver>;
export const browserPreviewWidgetTestkitFactory: VanillaUniTestkitFactory<BrowserPreviewWidgetUniDriver>;
export const listItemSelectTestkitFactory: VanillaUniTestkitFactory<ListItemSelectUniDriver>;
export const timeTableTestkitFactory: VanillaUniTestkitFactory<TimeTableUniDriver>;
export const marketingLayoutTestkitFactory: VanillaUniTestkitFactory<MarketingLayoutUniDriver>;
export const paletteTestkitFactory: VanillaUniTestkitFactory<PaletteUniDriver>;
export const warningIndicatorTestkitFactory: VanillaUniTestkitFactory<WarningIndicatorUniDriver>;
export const variableInputTestkitFactory: VanillaUniTestkitFactory<VariableInputUniDriver>;
export const imageTestkitFactory: VanillaUniTestkitFactory<ImageUniDriver>;
export const sidePanelTestkitFactory: VanillaUniTestkitFactory<SidePanelUniDriver>;
export const fontUpgradeTestkitFactory: VanillaUniTestkitFactory<FontUpgradeUniDriver>;
export const sideMenuDrillTestkitFactory: DeprecatedVanillaTestkit;
export const headerTestkitFactory: VanillaTestkitFactory<HeaderDriver>;
export const sideMenuTestkitFactory: DeprecatedVanillaTestkit;
export const draggableTestkitFactory: DeprecatedVanillaTestkit;
export const editableRowTestkitFactory: VanillaTestkitFactory<EditableRowDriver>;
export const fieldLabelAttributesTestkitFactory: DeprecatedVanillaTestkit;
export const fieldWithSelectionCompositeTestkitFactory: DeprecatedVanillaTestkit;
export const radioButtonTestkitFactory: VanillaTestkitFactory<RadioButtonDriver>;
export const messageBoxMarketerialLayoutTestkitFactory: VanillaTestkitFactory<MessageBoxMarketerialLayoutDriver>;
export const messageBoxFunctionalLayoutTestkitFactory: VanillaTestkitFactory<MessageBoxFunctionalLayoutDriver<HTMLElement>>;
export const cardSubheaderTestkitFactory: VanillaUniTestkitFactory<SubheaderUniDriver>;
export const tooltipTestkitFactory: VanillaTestkitFactory<TooltipDriver>;
export const TooltipTestkit: VanillaUniTestkitFactory<TooltipUniDriver>;
export const customModalTestkitFactory: VanillaUniTestkitFactory<CustomModalUniDriver>;
export const statusIndicatorTestkitFactory: VanillaUniTestkitFactory<StatusIndicatorUniDriver>;