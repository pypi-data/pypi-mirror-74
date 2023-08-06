/**
 * @file   metal/macros.h
 * @date   01.07.2020
 * @author Klemens D. Morgenstern
 *
 */

#ifndef METAL_MISCL_MACROS_H
#define METAL_MISCL_MACROS_H

#if __cplusplus >= 201103L
#define METAL_NULL nullptr
#else
#define METAL_NULL 0
#endif

#define METAL_PP_CONCAT_IMPL(x, y) x##y
#define METAL_PP_CONCAT(x, y) METAL_PP_CONCAT_IMPL( x, y )

#define METAL_PP_STRINGIFY(x) METAL_PP_STRINGIFY2(x)
#define METAL_PP_STRINGIFY2(x) #x

#define METAL_PP_CONCAT_IMPL(x, y) x##y
#define METAL_PP_CONCAT(x, y) METAL_PP_CONCAT_IMPL( x, y )

#define METAL_PP_CHECK_N(x, n, ...) n
#define METAL_PP_CHECK(...) METAL_PP_CHECK_N(__VA_ARGS__, 0,)
#define METAL_PP_PROBE(x) x, 1,

#define METAL_PP_IS_PAREN(x) METAL_PP_CHECK(METAL_PP_IS_PAREN_PROBE x)
#define METAL_PP_IS_PAREN_PROBE(...) METAL_PP_PROBE()

#define METAL_PP_IIF(cond) METAL_PP_CONCAT(METAL_PP_IIF_, cond)
#define METAL_PP_IIF_0(t, f) f
#define METAL_PP_IIF_1(t, f) t

#define METAL_PP_REMOVE_PARENS_IMPL(...) __VA_ARGS__
#define METAL_PP_REMOVE_PARENS(Arg) METAL_PP_REMOVE_PARENS_IMPL Arg

#define METAL_PP_FIRST_IMPL(X, ...) X
#define METAL_PP_FIRST(...) METAL_PP_FIRST_IMPL(__VA_ARGS__,)

#define METAL_PP_SECOND_IMPL(X, Y, ...) Y
#define METAL_PP_SECOND(...) METAL_PP_SECOND_IMPL(__VA_ARGS__,,)

#define METAL_PP_REST_IMPL(X,...) __VA_ARGS__
#define METAL_PP_REST(X, ...) METAL_PP_REST_IMPL(X, __VA_ARGS__)

#define METAL_LOCATION_STRING() __FILE__ "(" METAL_PP_STRINGIFY(__LINE__) ")"

#define METAL_PP_NARG(...)  METAL_PP_NARG_(__VA_ARGS__,METAL_PP_RSEQ_N())
#define METAL_PP_NARG_(...) METAL_PP_ARG_N(__VA_ARGS__)

// python: "#define METAL_PP_ARG_N({}, N, ...) N".format(', '.join(["_{}".format(i) for i in range(1,129)]))
#define METAL_PP_ARG_N(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78, _79, _80, _81, _82, _83, _84, _85, _86, _87, _88, _89, _90, _91, _92, _93, _94, _95, _96, _97, _98, _99, _100, _101, _102, _103, _104, _105, _106, _107, _108, _109, _110, _111, _112, _113, _114, _115, _116, _117, _118, _119, _120, _121, _122, _123, _124, _125, _126, _127, _128, N, ...) N

// python: "METAL_PP_RSEQ_N() {}".format(', '.join(["{}".format(i) for i in range(128, -1, -1)]))
#define METAL_PP_RSEQ_N() 128, 127, 126, 125, 124, 123, 122, 121, 120, 119, 118, 117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104, 103, 102, 101, 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0

#define METAL_PP_OVERLOAD(Macro, ...) METAL_PP_CONCAT(Macro, METAL_PP_NARG(__VA_ARGS__))

#define METAL_PP_FOR_EACH_STEP_1(Macro, Arg) Macro( Arg )
// python: '\n'.join(['#define METAL_PP_FOR_EACH_STEP_{}(Macro, Arg, ..) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_{}(Macro, __VA_ARGS__)'.format(i, i-1) for i in range(2, 129)])
#define METAL_PP_FOR_EACH_STEP_2(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_1(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_3(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_2(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_4(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_3(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_5(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_4(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_6(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_5(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_7(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_6(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_8(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_7(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_9(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_8(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_10(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_9(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_11(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_10(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_12(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_11(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_13(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_12(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_14(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_13(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_15(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_14(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_16(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_15(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_17(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_16(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_18(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_17(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_19(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_18(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_20(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_19(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_21(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_20(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_22(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_21(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_23(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_22(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_24(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_23(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_25(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_24(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_26(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_25(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_27(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_26(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_28(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_27(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_29(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_28(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_30(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_29(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_31(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_30(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_32(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_31(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_33(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_32(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_34(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_33(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_35(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_34(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_36(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_35(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_37(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_36(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_38(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_37(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_39(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_38(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_40(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_39(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_41(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_40(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_42(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_41(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_43(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_42(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_44(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_43(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_45(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_44(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_46(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_45(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_47(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_46(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_48(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_47(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_49(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_48(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_50(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_49(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_51(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_50(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_52(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_51(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_53(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_52(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_54(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_53(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_55(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_54(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_56(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_55(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_57(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_56(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_58(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_57(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_59(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_58(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_60(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_59(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_61(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_60(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_62(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_61(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_63(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_62(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_64(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_63(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_65(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_64(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_66(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_65(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_67(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_66(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_68(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_67(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_69(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_68(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_70(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_69(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_71(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_70(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_72(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_71(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_73(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_72(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_74(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_73(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_75(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_74(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_76(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_75(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_77(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_76(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_78(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_77(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_79(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_78(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_80(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_79(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_81(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_80(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_82(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_81(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_83(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_82(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_84(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_83(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_85(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_84(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_86(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_85(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_87(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_86(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_88(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_87(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_89(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_88(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_90(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_89(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_91(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_90(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_92(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_91(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_93(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_92(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_94(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_93(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_95(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_94(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_96(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_95(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_97(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_96(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_98(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_97(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_99(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_98(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_100(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_99(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_101(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_100(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_102(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_101(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_103(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_102(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_104(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_103(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_105(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_104(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_106(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_105(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_107(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_106(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_108(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_107(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_109(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_108(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_110(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_109(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_111(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_110(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_112(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_111(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_113(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_112(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_114(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_113(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_115(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_114(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_116(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_115(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_117(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_116(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_118(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_117(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_119(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_118(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_120(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_119(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_121(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_120(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_122(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_121(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_123(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_122(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_124(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_123(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_125(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_124(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_126(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_125(Macro, __VA_ARGS__)
#define METAL_PP_FOR_EACH_STEP_127(Macro, Arg, ...) Macro ( Arg ) METAL_PP_FOR_EACH_STEP_126(Macro, __VA_ARGS__)

#define METAL_PP_FOR_EACH(Macro, ...)   METAL_PP_OVERLOAD(METAL_PP_FOR_EACH_STEP_, __VA_ARGS__) (Macro, __VA_ARGS__)

#define METAL_PP_UNIQUE_NAME_LINE2( name, line ) name##line
#define METAL_PP_UNIQUE_NAME_LINE( name, line ) METAL_PP_UNIQUE_NAME_LINE2( name, line )
#define METAL_PP_UNIQUE_NAME( name ) METAL_PP_UNIQUE_NAME_LINE( name, __COUNTER__ )


#endif