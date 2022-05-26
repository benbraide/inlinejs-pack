import { AutoBootstrap, GetGlobal, AttributeInterpolator, TextContentInterpolator } from '@benbraide/inlinejs';

import {
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
    ComponentMagicHandlerCompact,
    LocalsMagicHandlerCompact,
    RefsMagicHandlerCompact,
    ScopeMagicHandlerCompact,
    ProxyMagicHandlerCompact,
    NativeMagicHandlerCompact,
    WaitMagicHandlerCompact,
    StreamMagicHandlerCompact,
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
    DomMagicHandlerCompact
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
    GetMagicHandlerCompact,
    FetchMagicHandlerCompact,
    OverlayMagicHandlerCompact
} from '@benbraide/inlinejs-extended/lib/esm';

//Begin: inlinejs

AutoBootstrap();

GetGlobal().AddAttributeProcessor(AttributeInterpolator);
GetGlobal().AddTextContentProcessor(TextContentInterpolator);

//End: inlinejs


//Begin: inlinejs-core

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

ComponentMagicHandlerCompact();
LocalsMagicHandlerCompact();
RefsMagicHandlerCompact();
ScopeMagicHandlerCompact();
ProxyMagicHandlerCompact();
NativeMagicHandlerCompact();
WaitMagicHandlerCompact();
StreamMagicHandlerCompact();

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
GetMagicHandlerCompact();
FetchMagicHandlerCompact();
OverlayMagicHandlerCompact();

//End: inlinejs-extended
