import { AutoBootstrap, GetGlobal, AttributeInterpolator, TextContentInterpolator } from '@benbraide/inlinejs';

import {
    CodeConcept,
    DataDirectiveHandlerCompact,
    ComponentDirectiveHandlerCompact,
    LocalsDirectiveHandlerCompact,
    RefDirectiveHandlerCompact,
    PostDirectiveHandlerCompact,
    UninitDirectiveHandlerCompact,
    StaticDirectiveHandlerCompact,
    EffectDirectiveHandlerCompact,
    CloakDirectiveHandlerCompact,
    BindDirectiveHandlerCompact,
    ClassDirectiveHandlerCompact,
    StyleDirectiveHandlerCompact,
    TextDirectiveHandlerCompact,
    HtmlDirectiveHandlerCompact,
    OnDirectiveHandlerCompact,
    ModelDirectiveHandlerCompact,
    ShowDirectiveHandlerCompact,
    IfDirectiveHandlerCompact,
    ElseDirectiveHandlerCompact,
    EachDirectiveHandlerCompact,
    CodeDirectiveHandlerCompact,
    ComponentMagicHandlerCompact,
    LocalsMagicHandlerCompact,
    RefsMagicHandlerCompact,
    ScopeMagicHandlerCompact,
    ProxyMagicHandlerCompact,
    NativeMagicHandlerCompact,
    StaticMagicHandlerCompact,
    UnoptimizedMagicHandlerCompact,
    WatchMagicHandlerCompact,
    ArithmeticMagicHandlerCompact,
    RelationalMagicHandlerCompact,
    LogicalMagicHandlerCompact,
    NextTickMagicHandlerCompact,
    PickMagicHandlerCompact,
    ClassMagicHandlerCompact,
    EvaluateMagicHandlerCompact,
    DomMagicHandlerCompact,
    CodeMagicHandlerCompact
} from '@benbraide/inlinejs-core';

import {
    ResourceConcept,
    AttrDirectiveHandlerCompact,
    IntersectionDirectiveHandlerCompact,
    TickDirectiveHandlerCompact,
    FormDirectiveHandlerCompact,
    StateDirectiveHandlerCompact,
    OverlayDirectiveHandlerCompact,
    MouseDirectiveHandlerCompact,
    KeyboardDirectiveHandlerCompact,
    FormatMagicHandlerCompact,
    FetchMagicHandlerCompact,
    GetMagicHandlerCompact,
    ResourceMagicHandlerCompact,
    WaitMagicHandlerCompact,
    OverlayMagicHandlerCompact
} from '@benbraide/inlinejs-extended/lib/esm';

//Begin: inlinejs

AutoBootstrap();

GetGlobal().AddAttributeProcessor(AttributeInterpolator);
GetGlobal().AddTextContentProcessor(TextContentInterpolator);

//End: inlinejs


//Begin: inlinejs-core

GetGlobal().SetConcept('code', new CodeConcept());

DataDirectiveHandlerCompact();
ComponentDirectiveHandlerCompact();
LocalsDirectiveHandlerCompact();
RefDirectiveHandlerCompact();

PostDirectiveHandlerCompact();
UninitDirectiveHandlerCompact();

StaticDirectiveHandlerCompact();
EffectDirectiveHandlerCompact();

CloakDirectiveHandlerCompact();

BindDirectiveHandlerCompact();
ClassDirectiveHandlerCompact();
StyleDirectiveHandlerCompact();

TextDirectiveHandlerCompact();
HtmlDirectiveHandlerCompact();
OnDirectiveHandlerCompact();
ModelDirectiveHandlerCompact();

ShowDirectiveHandlerCompact();

IfDirectiveHandlerCompact();
ElseDirectiveHandlerCompact();
EachDirectiveHandlerCompact();

CodeDirectiveHandlerCompact();

ComponentMagicHandlerCompact();
LocalsMagicHandlerCompact();
RefsMagicHandlerCompact();
ScopeMagicHandlerCompact();
ProxyMagicHandlerCompact();
NativeMagicHandlerCompact();

StaticMagicHandlerCompact();
UnoptimizedMagicHandlerCompact();
WatchMagicHandlerCompact();

ArithmeticMagicHandlerCompact();
RelationalMagicHandlerCompact();
LogicalMagicHandlerCompact();

NextTickMagicHandlerCompact();
PickMagicHandlerCompact();
ClassMagicHandlerCompact();
EvaluateMagicHandlerCompact();
DomMagicHandlerCompact();

CodeMagicHandlerCompact();

//End: inlinejs-core


//Begin: inlinejs-extended

GetGlobal().SetConcept('resource', new ResourceConcept());
    
AttrDirectiveHandlerCompact();
IntersectionDirectiveHandlerCompact();
TickDirectiveHandlerCompact();
FormDirectiveHandlerCompact();
StateDirectiveHandlerCompact();
OverlayDirectiveHandlerCompact();
MouseDirectiveHandlerCompact();
KeyboardDirectiveHandlerCompact();

FormatMagicHandlerCompact();
FetchMagicHandlerCompact();
GetMagicHandlerCompact();
ResourceMagicHandlerCompact();
WaitMagicHandlerCompact();
OverlayMagicHandlerCompact();

//End: inlinejs-extended
