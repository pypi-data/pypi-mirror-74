import { __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled from '@emotion/styled';
import Tooltip from 'app/components/tooltip';
import space from 'app/styles/space';
import Time from './time/time';
import Data from './data/data';
import Category from './category';
import Icon from './icon';
import Level from './level';
import { GridCell, GridCellLeft } from './styles';
import { BreadcrumbType } from './types';
var ListBody = React.memo(function (_a) {
    var orgId = _a.orgId, event = _a.event, breadcrumbs = _a.breadcrumbs, relativeTime = _a.relativeTime, displayRelativeTime = _a.displayRelativeTime, searchTerm = _a.searchTerm;
    return (<React.Fragment>
      {breadcrumbs.map(function (_a, idx) {
        var color = _a.color, icon = _a.icon, id = _a.id, crumb = __rest(_a, ["color", "icon", "id"]);
        var hasError = crumb.type === BreadcrumbType.ERROR;
        var isLastItem = breadcrumbs.length - 1 === idx;
        return (<React.Fragment key={id}>
            <GridCellLeft hasError={hasError} isLastItem={isLastItem}>
              <Tooltip title={crumb.description}>
                <Icon icon={icon} color={color}/>
              </Tooltip>
            </GridCellLeft>
            <GridCellCategory hasError={hasError} isLastItem={isLastItem}>
              <Category category={crumb === null || crumb === void 0 ? void 0 : crumb.category} searchTerm={searchTerm}/>
            </GridCellCategory>
            <GridCell hasError={hasError} isLastItem={isLastItem}>
              <Data event={event} orgId={orgId} breadcrumb={crumb} searchTerm={searchTerm}/>
            </GridCell>
            <GridCell hasError={hasError} isLastItem={isLastItem}>
              <Level level={crumb.level} searchTerm={searchTerm}/>
            </GridCell>
            <GridCell hasError={hasError} isLastItem={isLastItem}>
              <Time timestamp={crumb === null || crumb === void 0 ? void 0 : crumb.timestamp} relativeTime={relativeTime} displayRelativeTime={displayRelativeTime} searchTerm={searchTerm}/>
            </GridCell>
          </React.Fragment>);
    })}
    </React.Fragment>);
});
export default ListBody;
var GridCellCategory = styled(GridCell)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @media (min-width: ", ") {\n    padding-left: ", ";\n  }\n"], ["\n  @media (min-width: ", ") {\n    padding-left: ", ";\n  }\n"])), function (p) { return p.theme.breakpoints[0]; }, space(1));
var templateObject_1;
//# sourceMappingURL=listBody.jsx.map