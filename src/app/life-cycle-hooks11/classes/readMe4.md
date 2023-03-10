OnPush change detection

OnPush works by comparing references
- If you mutate the existing object ====> OnPush change detector will not get triggered
- If you provide a reference to the new object ====> OnPush change detector will get triggered.


In ng-do-check12 component
- originalValue1 is updated
    but its primitive datatype ========> so, OnPush wont get triggered
- 